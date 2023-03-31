export default async function handler(req, res) {
  try {
    // this should be the actual path not a rewritten path
    // e.g. for "/blog/[slug]" this should be "/blog/post-1"
    if (req.query.slug) {
      await res.revalidate(`/posts/${req.query.slug}`)
      return res.json({ revalidated: true })
    } else {
      await res.revalidate('/posts')
      return res.json({ revalidated: true })
    }
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send('Error revalidating')
  }
}
