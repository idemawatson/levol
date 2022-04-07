import prisma from '@/utils/prisma'
import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0'

const getHandler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = getSession(req, res)
  const user = session?.user
  if (!user) {
    res.status(401).json()
    return
  }
  const result = await prisma.category
    .findMany({
      where: {
        userId: user.sub,
      },
    })
    .finally(async () => await prisma.$disconnect())
  res.status(200).json(result)
}

export default withApiAuthRequired(async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET':
      return getHandler(req, res)
    default:
      res.status(405).json({ err: 'Method Not Allowed' })
  }
})
