import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository copy'
import { CreateUserUseCase } from '../create-user-use-case'

export function makeCreateUserUseCase() {
  const prismaUsersRepository = new PrismaUsersRepository()
  const createUserUseCase = new CreateUserUseCase(prismaUsersRepository)

  return createUserUseCase
}
