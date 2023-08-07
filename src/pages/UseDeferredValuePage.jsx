import React, { useDeferredValue, useState, memo } from "react"

function UseDeferredValuePage() {
  const [value, setValue] = useState("")
  const slowValue = useDeferredValue(value)

  console.log("sedationh ", value, slowValue)
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setValue(e.target.value)
        }}
      />
      <div>value: {value}</div>
      <MySlowList text={slowValue} />
    </div>
  )
}

const MySlowList = memo(function MySlowList({ text }) {
  const items = []
  for (let i = 0; i < 80; i++) {
    items.push(
      <ListItem key={i}>
        Result #{i} for "{text}"
      </ListItem>
    )
  }
  return (
    <div className="border">
      <p>
        <b>Results for "{text}":</b>
      </p>
      <ul className="List">{items}</ul>
    </div>
  )
})

function ListItem({ children }) {
  let now = performance.now()
  while (performance.now() - now < 3) {}
  return <div className="ListItem">{children}</div>
}

export default UseDeferredValuePage
