import { Pet } from '@prisma/client'
import { PetsRepository } from '@/repositories/pets-repositories'

interface GetPetUseCaseResponse {
  pets: Pet[]
}

export class GetPetUseCase {
  constructor(private petsRepository: PetsRepository) {}

  async execute(): Promise<GetPetUseCaseResponse> {
    const pets = await this.petsRepository.find()

    return {
      pets,
    }
  }
}
