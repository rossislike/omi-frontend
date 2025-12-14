import { useQuery } from "@tanstack/react-query"
import { fetchPicture } from "../api/api"

export default function useGetPicture(key: string) {
  return useQuery({
    queryKey: ["picture", key],
    queryFn: () => fetchPicture(key),
  })
}
