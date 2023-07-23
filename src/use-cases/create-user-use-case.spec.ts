import { InMemoryPetRepository } from '@/repositories/in-memory/in-memory-pets-repositories'
import { describe, it, beforeEach, expect } from 'vitest'
import { CreatePetUseCase } from './create-pet-use-case'

let petsRepository: InMemoryPetRepository
let sut: CreatePetUseCase

describe('Create Pet Use Case', () => {
  beforeEach(() => {
    petsRepository = new InMemoryPetRepository()
    sut = new CreatePetUseCase(petsRepository)
  })

  it('should be able to create a pet', async () => {
    const { pet } = await sut.execute({
      id: '2',
      name: 'Kiara',
      characteristics: 'Caramelo',
      details: 'pequena',
      locality: 'Cajamar',
      createdAt: new Date(),
      city_Id: '1',
      ong_Id: '2',
    })
    expect(pet.id).toEqual(expect.any(String))
  })
})
