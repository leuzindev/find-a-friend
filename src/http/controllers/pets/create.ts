import { makeCreatePetUseCase } from '@/use-cases/factories/make-create-pet-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'

import { z } from 'zod'

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const createPetBodySchema = z.object({
    name: z.string(),
    characteristics: z.string(),
    details: z.string(),
    locality: z.string(),
    createdAt: z.date(),
    org: z.object({}),
  })

  const { name, characteristics, details, locality, createdAt, org } =
    createPetBodySchema.parse(request.body)

  try {
    const createPetUseCase = makeCreatePetUseCase()
    await createPetUseCase.execute({
      name,
      characteristics,
      details,
      locality,
      createdAt,
      org,
    })
  } catch (err) {
    if (err instanceof Error) {
      return reply.status(409).send({ message: err.message })
    }
    throw err
  }
}
