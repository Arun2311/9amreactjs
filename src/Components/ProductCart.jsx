import React, { useContext } from 'react'
import { CounterContext } from './Context/CounterContext'

export default function ProductCart() {
    const {increment} =  useContext(CounterContext)
  return (
    <div>
        <h1>Apple</h1>
        <button onClick={increment}>Add to Cart</button>
    </div>
  )
}
