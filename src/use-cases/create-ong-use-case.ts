import { Ong } from '@prisma/client'
import { OngsRepository } from '@/repositories/ongs-repositories'

interface CreateOngCaseRequest {
  id: string
  name: string
  address: string
  phone: string
  createdAt: Date
  isAdmin: boolean
}

interface CreateOngUseCaseResponse {
  ong: Ong
}

export class CreateOngUseCase {
  constructor(private ongsrepository: OngsRepository) {}

  async execute({
    id,
    name,
    address,
    phone,
    createdAt,
    isAdmin,
  }: CreateOngCaseRequest): Promise<CreateOngUseCaseResponse> {
    const ong = await this.ongsrepository.create({
      id,
      name,
      address,
      phone,
      createdAt,
      isAdmin,
    })

    return {
      ong,
    }
  }
}
