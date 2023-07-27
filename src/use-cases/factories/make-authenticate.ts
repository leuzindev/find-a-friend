import { AuthenticateUseCase } from '../authenticate-use-case'
import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository copy'

export function makeAuthenticateUseCase() {
  const prismaUsersRepository = new PrismaUsersRepository()
  const authenticateUseCase = new AuthenticateUseCase(prismaUsersRepository)

  return authenticateUseCase
}
