import { describe, it, beforeEach, expect } from 'vitest'

import { InMemoryUserRepository } from '@/repositories/in-memory/in-memory-users-repositories'
import { GetUserUseCase } from './get-user-use-case'

import { hash } from 'bcrypt'
import { ResourceNotFoundError } from './errors/resource-not-found-error'
import { InMemoryPetRepository } from '@/repositories/in-memory/in-memory-pets-repositories'
import { GetPetUseCase } from './get-pets-use-case'

let petsRepository: InMemoryPetRepository
let sut: GetPetUseCase

describe('Get Pets Use Case', () => {
  beforeEach(() => {
    petsRepository = new InMemoryPetRepository()
    sut = new GetPetUseCase(petsRepository)
  })

  it('should be able to get a user', async () => {
    await petsRepository.create({
      id: '2',
      name: 'Kiara',
      characteristics: 'Caramelo',
      details: 'pequena',
      locality: 'Sao paulo',
      createdAt: new Date(),
      city_Id: '1',
      org_Id: '2',
    })

    const { pets } = await sut.execute()

    expect(pets).toHaveLength(1)
  })
})
