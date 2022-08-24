import { createCookieSessionStorage, redirect } from '@remix-run/node'

import type { User } from '~/models/user.server'
import { getUserById } from '~/models/user.server'

const SESSION_SECRET = 'SESSION_SECRET!'

export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: '__session',
    httpOnly: true,
    path: '/',
    sameSite: 'lax',
    secrets: [SESSION_SECRET],
    secure: process.env.NODE_ENV === 'production'
  }
})

const USER_SESSION_KEY = 'userId'

export async function getSession(request: Request) {
  const cookie = request.headers.get('Cookie')
  return sessionStorage.getSession(cookie)
}

export async function getUserId(request: Request): Promise<User['id'] | undefined> {
  const session = await getSession(request)
  const userId = session.get(USER_SESSION_KEY)
  return userId
}

export async function getUser(request: Request) {
  const userId = await getUserId(request)
  if (userId === undefined) return null

  const user = await getUserById(userId)
  if (user) return user

  throw await logout(request)
}

export async function requireUserId(request: Request, redirectTo: string = new URL(request.url).pathname) {
  const userId = await getUserId(request)
  if (userId) return userId
  if (redirectTo === '/') {
    throw redirect('/login')
  } else {
    const searchParams = new URLSearchParams([['redirectTo', redirectTo]])
    throw redirect(`/login?${searchParams}`)
  }
}

export async function requireUser(request: Request) {
  const userId = await requireUserId(request)

  const user = await getUserById(userId)
  if (user) return user

  throw await logout(request)
}

export async function createUserSession({ request, userId, redirectTo }: { request: Request; userId: string; redirectTo: string }) {
  const session = await getSession(request)
  session.set(USER_SESSION_KEY, userId)
  return redirect(redirectTo, {
    headers: {
      'Set-Cookie': await sessionStorage.commitSession(session, {})
    }
  })
}

export async function logout(request: Request) {
  const session = await getSession(request)
  return redirect('/', {
    headers: {
      'Set-Cookie': await sessionStorage.destroySession(session)
    }
  })
}
