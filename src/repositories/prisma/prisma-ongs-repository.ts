import { Prisma } from '@prisma/client'
import { prisma } from '@/http/routes/lib/prisma'
import { OngsRepository } from '../ongs-repositories'

export class PrismaOngsRepository implements OngsRepository {
  async findById(id: string) {
    const ong = await prisma.ong.findUnique({
      where: {
        id,
      },
    })

    return ong
  }

  async create(data: Prisma.OngCreateInput) {
    const ong = await prisma.ong.create({
      data,
    })

    return ong
  }
}
