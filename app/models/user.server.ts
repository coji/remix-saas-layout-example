export interface User {
  id: string
  name: string
  email: string
  photoUrl: string
  password: string
}

const demoUser: User = {
  id: 'demo',
  name: 'Demo User',
  email: 'demo@techtalk.jp',
  photoUrl: '',
  password: 'password'
}

export function getUserById(id: User['id']) {
  return id === demoUser.id ? demoUser : null
}

export function getUserByEmail(email: User['email']) {
  return email === demoUser.email ? demoUser : null
}

export function verifyLogin(email: User['email'], password: string) {
  return email === demoUser.email && password === demoUser.password ? demoUser : null
}
