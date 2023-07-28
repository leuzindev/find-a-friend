import { describe, it, beforeEach, expect } from 'vitest'

import { InMemoryOrgRepository } from '@/repositories/in-memory/in-memory-orgs-repositories'
import { CreateOrgUseCase } from './create-org-use-case'

let orgsRepository: InMemoryOrgRepository
let sut: CreateOrgUseCase

describe('Orgs Use Case', () => {
  beforeEach(() => {
    orgsRepository = new InMemoryOrgRepository()
    sut = new CreateOrgUseCase(orgsRepository)
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
