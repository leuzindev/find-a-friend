import { describe, it, beforeEach, expect } from 'vitest'

import { InMemoryUserRepository } from '@/repositories/in-memory/in-memory-users-repositories'
import { GetUserUseCase } from './get-user-use-case'

import { hash } from 'bcrypt'

let usersRepository: InMemoryUserRepository
let sut: GetUserUseCase

describe('Users Use Case', () => {
  beforeEach(() => {
    usersRepository = new InMemoryUserRepository()
    sut = new GetUserUseCase(usersRepository)
  })

  it('should be able to create a user', async () => {
    const createdUser = await usersRepository.create({
      name: 'Leonardo',
      email: 'Leonardo@gmail.com',
      password_hash: await hash('123456', 6),
    })

    const { user } = await sut.execute({
      userId: createdUser.id,
    })

    expect(user.id).toEqual(expect.any(String))
    expect(user.name).toEqual('Leonardo')
  })
})
