import { Prisma } from '@prisma/client'
import { prisma } from '@/http/routes/lib/prisma'
import { OrgsRepository } from '../orgs-repositories'

export class PrismaOrgsRepository implements OrgsRepository {
  async findById(id: string) {
    const ong = await prisma.org.findUnique({
      where: {
        id,
      },
    })

    return ong
  }

  async create(data: Prisma.OrgCreateInput) {
    const ong = await prisma.org.create({
      data,
    })

    return ong
  }
}
