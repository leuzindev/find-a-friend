import { FastifyInstance } from 'fastify'

import { list } from './list'
import { create } from './create'
import { verifyJWT } from '@/http/middlewares/verify-jwt'

export async function petsRoutes(app: FastifyInstance) {
  app.get('/pets', list)

  app.post('/pets', { onRequest: [verifyJWT] }, create)
}
