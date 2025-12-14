const API_URL = import.meta.env.VITE_API_URL

export const fetchPicture = async (key: string) => {
  const response = await fetch(`${API_URL}/pictures/${key}`)
  return response.text()
}
