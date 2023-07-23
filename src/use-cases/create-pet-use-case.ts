import { Pet } from '@prisma/client'
import { PetsRepository } from '@/repositories/pets-repositories'

interface CreatePetCaseRequest {
  id: string
  name: string
  characteristics: string
  details: string
  locality: string
  createdAt: Date
  ong_Id: string
  city_Id: string
}

interface CreatePetUseCaseResponse {
  pet: Pet
}

export class CreatePetUseCase {
  constructor(private pestRepository: PetsRepository) {}

  async execute({
    id,
    name,
    characteristics,
    details,
    locality,
    createdAt,
    ong_Id,
    city_Id,
  }: CreatePetCaseRequest): Promise<CreatePetUseCaseResponse> {
    const pet = await this.pestRepository.create({
      id,
      name,
      characteristics,
      details,
      locality,
      createdAt,
      ong_Id,
      city_Id,
    })

    return {
      pet,
    }
  }
}
