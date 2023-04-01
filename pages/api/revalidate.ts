import { NextApiRequest, NextApiResponse } from 'next'

type PageTypes = 'users' | 'posts'

const revalidateFetchers = (
  page: PageTypes,
  slug: string | string[] | undefined
) => {
  if (slug) {
    fetch(`/api/revalidate/${page}/${slug}`)
  } else {
    fetch(`/api/revalidate/${page}`)
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
        revalidateFetchers('users', req.query.slug)
        return res.json({ revalidated: true })
      }
      case 'posts': {
        revalidateFetchers('posts', req.query.slug)
        return res.json({ revalidated: true })
      }
    }
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send('Error revalidating')
  }
}
