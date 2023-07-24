import ErrorBoundary from "../components/ErrorBoundary"

function ErrorPage() {
  return (
    <ErrorBoundary fallback={<div>Error!!!</div>}>
      ErrorPage
      {/* <HasError1 /> */}
      <HasError2 />
    </ErrorBoundary>
  )
}

function HasError1() {
  throw new Error()
  return <div>Error</div>
}

function HasError2() {
  useEffect(() => {
    throw new Error()
  }, [])

  return <div>HasError2</div>
}

export default ErrorPage
