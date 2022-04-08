import prisma from '@/utils/prisma'
import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0'
import { v4 } from 'uuid'

const postHandler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = getSession(req, res)
  const user = session?.user
  if (!user) {
    res.status(401).json({ message: 'auth required.' })
    return
  }
  console.log(user)
  const body = req.body
  const result = await prisma.category
    .create({
      data: {
        id: v4(),
        name: body.name,
        level: 1,
        exp: 0,
        levelType: body.levelType,
        user: user.sub,
      },
    })
    .finally(async () => await prisma.$disconnect())
  res.status(200).json('happy')
}

export default withApiAuthRequired(async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'POST':
      return postHandler(req, res)
    default:
      res.status(405).json({ err: 'Method Not Allowed' })
  }
})
