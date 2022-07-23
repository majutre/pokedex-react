const API_URL = 'http://localhost:5000'

export const listPokemon = async (limit = 10, offset = 25) => {
  try {
    let url = `${API_URL}/pokemon/${limit}/${offset}`
    const response = await fetch(url)
    return await response.json()
  } catch (error) {
    console.log("Error: ", error)
  }
}

export const getPokemonDataByUrl = async (url) => {
  try {
    const response = await fetch(url)
    return await response.json()
  } catch (error) {
    console.log("Error: ", error)
  }
}

export const searchPokemon = async (pokemon) => {
  try {
    let url = `${API_URL}/search/${pokemon}`
    const response = await fetch(url)
    return await response.json()
  } catch (error) {
    console.log("Error (searchPokemon): ", error)
  }
}