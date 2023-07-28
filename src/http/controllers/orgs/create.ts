import { makeCreateOngUseCase } from '@/use-cases/factories/make-create-ong-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'

import { z } from 'zod'

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const createOngBodySchema = z.object({
    id: z.string(),
    name: z.string(),
    address: z.string(),
    phone: z.string(),
    createdAt: z.date(),
    isAdmin: z.boolean(),
  })

  const { id, name, address, phone, createdAt, isAdmin } =
    createOngBodySchema.parse(request.body)

  try {
    const CreateOngUseCase = makeCreateOngUseCase()
    await CreateOngUseCase.execute({
      id,
      name,
      address,
      phone,
      createdAt,
      isAdmin,
    })
  } catch (err) {
    if (err instanceof Error) {
      return reply.status(409).send({ message: err.message })
    }
    throw err
  }
}
