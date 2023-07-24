import React, { Suspense, useState } from "react"
import LogEvents from "../components/LogEvents"

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
  const [resource, setResource] = useState(Promise.resolve("not start"))

  return (
    <div>
      SuspensePages
      <Suspense fallback={<div>Loading</div>}>
        <SuspenseChild resource={resource} />
      </Suspense>
      <button
        onClick={() => {
          setResource(mockApi())
        }}
      >
        Fetch
      </button>
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
