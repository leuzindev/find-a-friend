import { ResourceNotFoundError } from '@/use-cases/errors/resource-not-found-error'
import { makeGetPetUseCase } from '@/use-cases/factories/make-get-pet-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function list(request: FastifyRequest, reply: FastifyReply) {
  try {
    const getPetUseCase = makeGetPetUseCase()
    const { pets } = await getPetUseCase.execute()

    return reply.status(200).send(pets)
  } catch (err) {
    if (err instanceof ResourceNotFoundError) {
      return reply.status(409).send({ message: err.message })
    }
    throw err
  }
}
