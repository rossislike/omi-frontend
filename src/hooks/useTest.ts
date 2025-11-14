import { useEffect, useState } from "react"

type Ksuid = {
  string: string
  timestamp: string
  payload: string
}

type TestData = {
  message: string
  ksuid: Ksuid
}

export function useTest() {
  const [data, setData] = useState<TestData | null>(null)

  useEffect(() => {
    async function fetchTest() {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/test`)
        const data = await response.json()
        setData({ ...data })
        console.log(data)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }
    fetchTest()
  }, [])

  return { data }
}
