import { useState } from 'react'

export function Main() {
  const [count, setCount] = useState(0)
  console.log('count')
  return (
    <div className="flex justify-center items-center h-full bg-gradient-to-r from-cyan-500 to-blue-500">
      <button
        className="outline-none p-3 text-lg rounded-3xl bg-blue-300 hover:opacity-70 "
        onClick={() => {
          setCount(count + 1)
        }}
      >
        Count is {count}
      </button>
    </div>
  )
}
