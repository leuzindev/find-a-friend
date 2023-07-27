import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository copy'
import { GetUserUseCase } from '../get-user-use-case'

export function makeGetUserUseCase() {
  const prismaUsersRepository = new PrismaUsersRepository()
  const getUserUseCase = new GetUserUseCase(prismaUsersRepository)

  return getUserUseCase
}
