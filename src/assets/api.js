export const listPokemon = async (limit = 50, offset = 25) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    const response = await fetch(url)
    return await response.json()
  } catch (error) {
    console.log("Error: ", error)
  }
}