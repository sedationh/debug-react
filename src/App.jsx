import { Suspense } from "react"
import LogEvents from "./components/LogEvents"
import SuspensePage from "./components/SuspensePage"
import SetState from "./components/SetState"

function App() {
  return (
    <div className="App">
      {/* <SetState /> */}
      <SuspensePage />
      {/* <LogEvents /> */}
    </div>
  )
}

export default App
