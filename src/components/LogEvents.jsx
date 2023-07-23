import { useLayoutEffect, useRef } from "react"

function LogEvents({ name = "LogEvents" }) {
  useLayoutEffect(() => {
    console.log(`${name}: commit`)
  })
  console.log(`${name}: render`)
  return null
}

export default LogEvents
