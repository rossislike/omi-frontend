import { Church } from "lucide-react"
import { Link } from "react-router-dom"

export function ChurchHome() {
  return (
    <div className="flex items-center">
      <Link to="/">
        <Church className="h-8 w-8 text-blue-600" />
        <span className="font-semibold text-xl">OMIC</span>
      </Link>
    </div>
  )
}
