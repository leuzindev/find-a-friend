import { describe, it, beforeEach, expect } from 'vitest'

import { InMemoryOngRepository } from '@/repositories/in-memory/in-memory-ongs-repositories'
import { CreateOrgUseCase } from './create-org-use-case'

let ongsRepository: InMemoryOngRepository
let sut: CreateOrgUseCase

describe('Orgs Use Case', () => {
  beforeEach(() => {
    ongsRepository = new InMemoryOngRepository()
    sut = new CreateOrgUseCase(ongsRepository)
  })

  it('should be able to create a org', async () => {
    const { org } = await sut.execute({
      id: '1',
      name: 'Casa das patinhas',
      address: 'Rua das cocas',
      phone: '(11)2203-3294',
      createdAt: new Date(),
      isAdmin: false,
    })

    expect(org.id).toEqual(expect.any(String))
  })

  it('should be able to create a org has admin', async () => {
    const { org } = await sut.execute({
      id: '1',
      name: 'Casa das patinhas',
      address: 'Rua das cocas',
      phone: '(11)2203-3294',
      createdAt: new Date(),
      isAdmin: true,
    })

    expect(org.isAdmin).toEqual(true)
  })
})
