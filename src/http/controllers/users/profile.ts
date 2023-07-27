import { ResourceNotFoundError } from '@/use-cases/errors/resource-not-found-error'
import { makeGetUserUseCase } from '@/use-cases/factories/make-get-user-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function profile(request: FastifyRequest, reply: FastifyReply) {
  try {
    const getUserUseCase = makeGetUserUseCase()
    const { user } = await getUserUseCase.execute({
      userId: request.user.sub,
    })

    return reply.status(200).send({
      user: {
        ...user,
        password_hash: undefined,
      },
    })
  } catch (err) {
    if (err instanceof ResourceNotFoundError) {
      return reply.status(409).send({ message: err.message })
    }
    throw err
  }
}
