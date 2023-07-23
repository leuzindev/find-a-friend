import { Pet } from '@prisma/client'
import { PetsRepository } from '../pets-repositories'
import { randomUUID } from 'node:crypto'

export class InMemoryPetRepository implements PetsRepository {
  public pets: Pet[] = []

  async create(data: Pet) {
    const pet: Pet = {
      id: data.id ?? randomUUID(),
      name: data.name,
      characteristics: data.characteristics,
      details: data.details,
      locality: data.locality,
      createdAt: new Date(),
      ong_Id: data.ong_Id,
      city_Id: data.city_Id,
    }
    this.pets.push(pet)
    return pet
  }
}
