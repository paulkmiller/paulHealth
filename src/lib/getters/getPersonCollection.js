export async function getPersonCollection() {
  const response = await fetch('/api/personCollection')
  const personCollections = await response.json()

  return personCollections
}
