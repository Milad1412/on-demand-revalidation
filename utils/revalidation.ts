type PageTypes = 'users' | 'posts'

const revalidationFetchers = (page: PageTypes, slug: number | undefined) => {
  if (slug) {
    fetch(`/api/revalidate?page=${page}&slug=${slug}`)
  } else {
    fetch(`/api/revalidate?page=${page}`)
  }
}

export const revalidation = (page: PageTypes, slug?: number) => {
  switch (page) {
    case 'users': {
      revalidationFetchers(page, slug)
      break
    }
    case 'posts': {
      revalidationFetchers(page, slug)
      break
    }
  }
}
