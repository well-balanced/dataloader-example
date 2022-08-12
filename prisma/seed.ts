import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const user = await prisma.user.create({ data: { name: 'well-balanced' } })

  const promises = Array.from({ length: 10 }).map(
    async (_, idx) =>
      await prisma.post.create({
        data: {
          title: `title ${idx + 1}`,
          content: `content ${idx + 1}`,
          userId: user.id,
          comments: {
            createMany: {
              data: Array.from({ length: 10 }).map(() => ({
                userId: user.id,
                content: `content ${idx + 1}`,
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
