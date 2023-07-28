import fastify from 'fastify'
import fastifyJwt from '@fastify/jwt'

import { env } from './env'
import { ZodError } from 'zod'
import { usersRoutes } from './http/controllers/users/routes'
import fastifyCookie from '@fastify/cookie'
import { petsRoutes } from './http/controllers/pets/routes'

export const app = fastify()

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
  cookie: {
    cookieName: 'refreshToken',
    signed: false,
  },
  sign: {
    expiresIn: '10m',
  },
})

app.register(fastifyCookie)

app.register(usersRoutes)
app.register(petsRoutes)

app.setErrorHandler((error, _, reply) => {
  if (error instanceof ZodError) {
    return reply
      .status(400)
      .send({ message: 'Validation error', issues: error.format() })
  }

  if (env.NODE_ENV !== 'production') {
    console.error(error)
  } else {
    // Obsevability tool
  }

  return reply.status(500).send({ message: 'Internal server error' })
})
