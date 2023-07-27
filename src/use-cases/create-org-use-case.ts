import { Org } from '@prisma/client'
import { OrgsRepository } from '@/repositories/orgs-repositories'

interface CreateOrgCaseRequest {
  id: string
  name: string
  address: string
  phone: string
  createdAt: Date
  isAdmin: boolean
}

interface CreateOrgUseCaseResponse {
  org: Org
}

export class CreateOrgUseCase {
  constructor(private orgsrepository: OrgsRepository) {}

  async execute({
    id,
    name,
    address,
    phone,
    createdAt,
    isAdmin,
  }: CreateOrgCaseRequest): Promise<CreateOrgUseCaseResponse> {
    const org = await this.orgsrepository.create({
      id,
      name,
      address,
      phone,
      createdAt,
      isAdmin,
    })

    return {
      org,
    }
  }
}
