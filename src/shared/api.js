export const api = {
  catsRetrieve: async () => {
    const response = await fetch('https://cat-fact.herokuapp.com/facts')
    if (!response.ok) {
      throw new Error('failed')
    }
    return response.json()
  }
}
