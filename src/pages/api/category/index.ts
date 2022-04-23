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
  console.log(req.body)
  const body = req.body
  if (!req.body.name || !req.body.levelType) {
    throw new Error('param is invalid.')
  }
  const result = await prisma.category
    .create({
      data: {
        id: v4(),
        name: body.name,
        level: 1,
        exp: 0,
        levelType: body.levelType,
        userId: user.sub,
      },
    })
    .finally(async () => await prisma.$disconnect())
  res.status(200).json(result)
}

export default withApiAuthRequired(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method == 'POST') {
      return await postHandler(req, res)
    } else {
      res.status(405).json({ err: 'Method Not Allowed' })
    }
  } catch (e) {
    if (e instanceof Error) {
      console.error(e)
      res.status(400).json({ err: e.message })
    } else {
      res.status(500).json({ err: 'unknown error.' })
    }
  }
})
