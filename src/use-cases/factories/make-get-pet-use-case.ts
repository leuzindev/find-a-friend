import { GetPetUseCase } from '../get-pets-use-case'
import { PrismaPetsRepository } from '@/repositories/prisma/prisma-pets-repository'

export function makeGetPetUseCase() {
  const prismaPetsRepository = new PrismaPetsRepository()
  const getUserUseCase = new GetPetUseCase(prismaPetsRepository)

  return getUserUseCase
}
