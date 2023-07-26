import { PrismaOngsRepository } from '@/repositories/prisma/prisma-ongs-repository'
import { CreateOngUseCase } from '../create-ong-use-case'

export function makeCreateOngUseCase() {
  const prismaOngsRepository = new PrismaOngsRepository()
  const createOngsUseCase = new CreateOngUseCase(prismaOngsRepository)

  return createOngsUseCase
}
