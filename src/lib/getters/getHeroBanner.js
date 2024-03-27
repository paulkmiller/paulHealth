export async function getHeroBanner() {
  const response = await fetch('/api/heroBanner')
  const heroBanners = await response.json()

  return heroBanners
}
