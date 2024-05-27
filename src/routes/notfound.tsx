import { HttpStatusCode } from "@solidjs/start"

export default function NotFound() {
  return <div><HttpStatusCode code={404} /></div>
}
