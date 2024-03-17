import { LoaderFunctionArgs } from '@remix-run/node'
import { logout } from '../../util/auth/session.server'

export const loader = async ({
  request
}: LoaderFunctionArgs) => {
  return await logout(request)
}