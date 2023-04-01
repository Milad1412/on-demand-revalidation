import { NextApiRequest, NextApiResponse } from 'next'

type PageTypes = 'users' | 'posts'

const revalidateFetchers = async (
  page: PageTypes,
  slug: string | string[] | undefined,
  req: NextApiRequest,
  res: NextApiResponse
) => {
  if (slug) {
    await res.revalidate(`/users/${req.query.slug}`)
  } else {
    await res.revalidate(`/users`)
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // this should be the actual path not a rewritten path
    // e.g. for "/blog/[slug]" this should be "/blog/post-1"
    switch (req.query.page) {
      case 'users': {
        revalidateFetchers('users', req.query.slug, req, res)
      }
      case 'posts': {
        revalidateFetchers('users', req.query.slug, req, res)
      }
    }
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send('Error revalidating')
  }
}
