import { PrismaClient } from '@prisma/client'
import cuid from 'cuid'

const prisma = new PrismaClient()

async function main() {
  const user = await prisma.user.create({ data: { name: 'well-balanced' } })

  const promises = Array.from({ length: 10 }).map(
    async () =>
      await prisma.post.create({
        data: {
          title: cuid(),
          content: cuid(),
          userId: user.id,
          Comment: {
            createMany: {
              data: Array.from({ length: 10 }).map(() => ({
                userId: user.id,
                content: cuid(),
              })),
            },
          },
        },
      }),
  )
  await Promise.all(promises)

  console.info('🌱 seed records are created 🌱')
}

main()
