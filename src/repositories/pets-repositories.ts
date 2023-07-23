import { Pet } from '@prisma/client'

export interface PetsRepository {
  create(data: Pet): Promise<Pet>
}
