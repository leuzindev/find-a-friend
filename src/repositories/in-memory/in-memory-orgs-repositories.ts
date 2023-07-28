import { Org } from '@prisma/client'
import { randomUUID } from 'node:crypto'
import { OrgsRepository } from '../orgs-repositories'

export class InMemoryOrgRepository implements OrgsRepository {
  public orgs: Org[] = []

  async findById(id: string) {
    const org = this.orgs.find((org) => org.id === id)

    if (!org) {
      return null
    }

    return org
  }

  async create(data: Org) {
    const ong: Org = {
      id: data.id ?? randomUUID(),
      name: data.name,
      address: data.address,
      phone: data.phone,
      isAdmin: data.isAdmin ?? false,
      createdAt: new Date(),
    }
    this.orgs.push(ong)
    return ong
  }
}
