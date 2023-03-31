export const revalidation = (slug?: number) => {
  if (slug) {
    fetch(`/api/revalidate?slug=${slug}`)
  } else {
    fetch(`/api/revalidate`)
  }
}
