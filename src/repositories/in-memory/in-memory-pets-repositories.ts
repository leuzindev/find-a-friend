import { Pet, Prisma } from '@prisma/client'
import { PetsRepository } from '../pets-repositories'
import { randomUUID } from 'node:crypto'

export class InMemoryPetRepository implements PetsRepository {
  public pets: Pet[] = []

  async find() {
    return this.pets
  }

  async create(data: Prisma.PetCreateInput) {
    const pet: Pet = {
      id: data.id ?? randomUUID(),
      name: data.name,
      characteristics: data.characteristics,
      details: data.details,
      locality: data.locality,
      createdAt: new Date(),
      org: data.org,
    }
    this.pets.push(pet)
    return pet
  }
}
