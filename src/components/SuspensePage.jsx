import React, { Suspense, useMemo } from "react"
import LogEvents from "./LogEvents"

// This is a workaround for a bug to get the demo running.
// TODO: replace with real implementation when the bug is fixed.
function use(promise) {
  if (promise.status === "fulfilled") {
    return promise.value
  } else if (promise.status === "rejected") {
    throw promise.reason
  } else if (promise.status === "pending") {
    throw promise
  } else {
    promise.status = "pending"
    promise.then(
      (result) => {
        promise.status = "fulfilled"
        promise.value = result
      },
      (reason) => {
        promise.status = "rejected"
        promise.reason = reason
      }
    )
    throw promise
  }
}

const mockApi = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("ok")
    }, 2000)
  })

function SuspensePage() {
  const resource = useMemo(() => mockApi(), [])

  return (
    <div>
      SuspensePages
      <Suspense fallback={<div>Loading</div>}>
        <SuspenseChild resource={resource} />
      </Suspense>
    </div>
  )
}

function SuspenseChild({ resource }) {
  const value = use(resource)

  return (
    <div>
      value: {value}
      <LogEvents />
    </div>
  )
}

export default SuspensePage
