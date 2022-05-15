import prisma from '@/utils/prisma'
import { getSession, withApiAuthRequired } from '@auth0/nextjs-auth0'
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'

const getHandler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = getSession(req, res)
  const user = session?.user
  if (!user) {
    res.status(401).json({ message: 'auth required.' })
    return
  }

  const categoryId = req.query.categoryId
  if (!categoryId || Array.isArray(categoryId)) {
    res.status(400).json({ message: 'query id is invalid.' })
    return
  }

  const result = await prisma.category
    .findUnique({
      where: { id: categoryId },
    })
    .finally(async () => await prisma.$disconnect())

  if (!result) {
    res.status(400).json({ message: 'item not found.' })
    return
  }

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
