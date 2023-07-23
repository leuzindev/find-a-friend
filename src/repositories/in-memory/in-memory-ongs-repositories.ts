import { Ong } from '@prisma/client'
import { randomUUID } from 'node:crypto'
import { OngsRepository } from '../ongs-repositories'

export class InMemoryOngRepository implements OngsRepository {
  public ongs: Ong[] = []

  async create(data: Ong) {
    const ong: Ong = {
      id: data.id ?? randomUUID(),
      name: data.name,
      address: data.address,
      phone: data.phone,
      isAdmin: data.isAdmin ?? false,
      createdAt: new Date(),
    }
    this.ongs.push(ong)
    return ong
  }
}
