export const revalidation = (slug?: number) => {
    fetch(`/api/revalidate?slug=${slug}`)
  }
