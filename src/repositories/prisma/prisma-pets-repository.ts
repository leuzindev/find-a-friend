import { prisma } from '@/http/routes/lib/prisma'
import { PetsRepository } from '../pets-repositories'
import { Prisma } from '@prisma/client'

export class PrismaPetsRepository implements PetsRepository {
  async create(data: Prisma.PetCreateInput) {
    const createdPet = await prisma.pet.create({
      data,
    })

    return createdPet
  }

  async find() {
    const pets = await prisma.pet.findMany()

    return pets
  }
}
