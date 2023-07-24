import { Suspense } from "react"
import LogEvents from "./components/LogEvents"
import SuspensePage from "./pages/SuspensePage"
import SetStatePage from "./pages/SetStatePage"
import ErrorPage from "./pages/ErrorPage"

function App() {
  return (
    <div className="App">
      {/* <SetState /> */}
      <SuspensePage />
      {/* <LogEvents /> */}
      {/* <ErrorPage /> */}
    </div>
  )
}

export default App
