import React, { Suspense, useState, useTransition } from "react"
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

function TransitionPage() {
  const [resource, setResource] = useState(Promise.resolve("not start"))

  const [isPending, startTransition] = useTransition()

  return (
    <div>
      TransitionPage
      <Suspense fallback={<div>Loading</div>}>
        <SuspenseChild resource={resource} />
      </Suspense>
      <button
        onClick={() => {
          startTransition(() => {
            setResource(mockApi())
          })
        }}
      >
        Fetch
      </button>
      <LogEvents name={"TransitionPage"} />
    </div>
  )
}

function SuspenseChild({ resource }) {
  const value = use(resource)

  return (
    <div>
      value: {value}
      <LogEvents name={"SuspenseChild"} />
    </div>
  )
}

export default TransitionPage
