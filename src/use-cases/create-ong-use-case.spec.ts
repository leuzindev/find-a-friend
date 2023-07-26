import { describe, it, beforeEach, expect } from 'vitest'

import { InMemoryOngRepository } from '@/repositories/in-memory/in-memory-ongs-repositories'
import { CreateOngUseCase } from './create-ong-use-case'

let ongsRepository: InMemoryOngRepository
let sut: CreateOngUseCase

describe('Ongs Use Case', () => {
  beforeEach(() => {
    ongsRepository = new InMemoryOngRepository()
    sut = new CreateOngUseCase(ongsRepository)
  })

  it('should be able to create a ong', async () => {
    const { ong } = await sut.execute({
      id: '1',
      name: 'Casa das patinhas',
      address: 'Rua das cocas',
      phone: '(11)2203-3294',
      createdAt: new Date(),
      isAdmin: false,
    })

    expect(ong.id).toEqual(expect.any(String))
  })

  it('should be able to create a ong has admin', async () => {
    const { ong } = await sut.execute({
      id: '1',
      name: 'Casa das patinhas',
      address: 'Rua das cocas',
      phone: '(11)2203-3294',
      createdAt: new Date(),
      isAdmin: true,
    })

    expect(ong.isAdmin).toEqual(true)
  })
})
