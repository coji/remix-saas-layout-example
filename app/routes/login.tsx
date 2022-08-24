import type { ActionArgs } from '@remix-run/node'
import { Form } from '@remix-run/react'
import { Box, Center, GridItem, Stack, Heading, FormControl, FormLabel, FormHelperText, Input, Button } from '@chakra-ui/react'
import invariant from 'tiny-invariant'
import { createUserSession } from '~/session.server'
import { verifyLogin } from '~/models/user.server'
import { GithubLink } from '~/components/GithubLink'
export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData()

  const email = formData.get('email')?.toString()
  const password = formData.get('password')?.toString()

  invariant(email, 'email shoud specified')
  invariant(password, 'password shoud specified')

  const user = verifyLogin(email, password)
  if (!user) {
    return null
  }

  return createUserSession({
    request,
    userId: user.id,
    redirectTo: '/'
  })
}

export default function LoginPage() {
  return (
    <Box display="grid" gridTemplateRows="1fr auto" height="100vh">
      <Center>
        <Box bgColor="white" boxShadow="md" p="8" rounded="md" minW="sm">
          <Form action="." method="post">
            <Stack>
              <Heading size="md" textAlign="center" my="4">
                Login
              </Heading>

              <Box display="grid" gridTemplateColumns="1fr" gap="4" alignItems="baseline">
                <FormControl>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input id="email" name="email" type="email"></Input>
                  <FormHelperText>type 'demo@techtalk.jp'</FormHelperText>
                </FormControl>

                <FormControl>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Input id="password" name="password" type="password"></Input>
                  <FormHelperText>type 'password'</FormHelperText>
                </FormControl>

                <GridItem textAlign="center">
                  <Button type="submit" colorScheme="blue">
                    Login
                  </Button>
                </GridItem>
              </Box>
            </Stack>
          </Form>
        </Box>
      </Center>

      <Box as="footer" p="4" bgColor="white" textAlign="center">
        <GithubLink />
        <Box>Copyright&copy; TechTalk Inc.</Box>
      </Box>
    </Box>
  )
}
