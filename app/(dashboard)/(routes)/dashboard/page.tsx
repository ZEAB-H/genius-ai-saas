import { Button } from "@/components/ui/button"
import { DESTRUCTION } from "dns"

export default function Dashboard() {
  return (
    <p> 
      <p className="text-6xl text-green-400">Dashboard Page!</p>
      <p><Button variant="destructive">Click Me!</Button></p>
      </p>
  )
}
