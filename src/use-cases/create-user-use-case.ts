import { UsersRepository } from '@/repositories/users-repositories'
import { User } from '@prisma/client'

interface CreateUserUseCaseRequest {
  name: string
  email: string
  password: string
}

interface CreateUserUseCaseResponse {
  user: User
}

export class CreateUserUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({
    name,
    email,
    password,
  }: CreateUserUseCaseRequest): Promise<CreateUserUseCaseResponse> {
    const user = await this.usersRepository.create({
      name,
      email,
      password_hash: password,
    })

    return {
      user,
    }
  }
}
