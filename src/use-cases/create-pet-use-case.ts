import { Pet } from '@prisma/client'
import { PetsRepository } from '@/repositories/pets-repositories'

interface CreatePetCaseRequest {
  name: string
  characteristics: string
  details: string
  locality: string
  createdAt: Date
  org: any
}

interface CreatePetUseCaseResponse {
  pet: Pet
}

export class CreatePetUseCase {
  constructor(private pestRepository: PetsRepository) {}

  async execute({
    name,
    characteristics,
    details,
    locality,
    createdAt,
    org,
  }: CreatePetCaseRequest): Promise<CreatePetUseCaseResponse> {
    const pet = await this.pestRepository.create({
      name,
      characteristics,
      details,
      locality,
      createdAt,
      org,
    })

    return {
      pet,
    }
  }
}
