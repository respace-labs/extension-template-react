import { useEffect, useState } from 'react'

export function Main() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const id = setInterval(() => {
      setCount((cur) => cur + 1)
    }, 1000)
    return () => {
      clearInterval(id)
    }
  }, [])

  return (
    <div>
      <div className="bg-red-300 font-bold text-3xl">Hello world, {count}</div>
      <button
        className="text-white outline-none p-3 text-lg border rounded-full bg-black hover:opacity-70 "
        onClick={() => {
          console.log('hello.......')
        }}
      >
        Click me
      </button>
    </div>
  )
}
