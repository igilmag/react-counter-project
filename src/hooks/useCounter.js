import { useState } from 'react'

export default function useCounter (initialValue) {
  const [counter, setCounter] = useState(initialValue)
  const handleDecrease = () => {
    setCounter(counter - 1)
  }
  const handleReset = () => {
    setCounter(initialValue)
  }
  const handleIncrease = () => {
    setCounter(counter + 1)
  }
  return {
    counter,
    handleDecrease,
    handleIncrease,
    handleReset
  }
}
