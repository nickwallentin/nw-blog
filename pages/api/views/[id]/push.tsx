import { prisma } from '@lib/prisma/client';

export default async function apiHandler(req, res) {
  try {
    const { id } = req.query;
    const response = await prisma.article.update({
      where: {
        id: id,
      },
      data: {
        views: { increment: 1 },
      },
    });
    if (!id) {
      res.status(400).json({ error: 'No ID was provided' });
    }
    if (!response) {
      res.status(400).json({ error: 'Did not get a response' });
    }
    res.status(200).end();
  } catch (error) {
    res.status(500);
  }
}
