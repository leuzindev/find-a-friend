import { describe, it, beforeEach, expect } from 'vitest'

import { InMemoryUserRepository } from '@/repositories/in-memory/in-memory-users-repositories'
import { CreateUserUseCase } from './create-user-use-case'
import { UserAlreadyExistsError } from './errors/user-already-existis-error'

let usersRepository: InMemoryUserRepository
let sut: CreateUserUseCase

describe('Create User Use Case', () => {
  beforeEach(() => {
    usersRepository = new InMemoryUserRepository()
    sut = new CreateUserUseCase(usersRepository)
  })

  it('should be able to create a user', async () => {
    const { user } = await sut.execute({
      name: 'John doe',
      email: 'Johndoe@exemple.com',
      password: '123456',
    })
    expect(user.id).toEqual(expect.any(String))
  })

  it('should not be able to register with same email twice', async () => {
    const email = 'Johndoe@exemple.com'

    await sut.execute({
      name: 'John doe',
      email,
      password: '123456',
    })

    await expect(() =>
      sut.execute({
        name: 'John doe',
        email,
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(UserAlreadyExistsError)
  })
})
