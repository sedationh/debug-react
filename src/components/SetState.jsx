import React, { useState } from "react"
import { flushSync } from "react-dom"
import LogEvents from "./LogEvents"

function SetState() {
  const [cnt1, setCnt1] = useState(0)
  const [cnt2, setCnt2] = useState(0)

  return (
    <div>
      SetState
      <button
        onClick={() => {
          flushSync(() => {
            setCnt1(cnt1 + 1)
          })
          flushSync(() => {
            setCnt2(cnt2 + 1)
          })
        }}
      >
        {JSON.stringify({ cnt1, cnt2 }, null, 2)}
      </button>
      <LogEvents />
    </div>
  )
}

export default SetState
