import React, { useContext } from 'react'
import { CounterContext } from './Context/CounterContext'

export default function CartCount() {

    const {count} = useContext(CounterContext)
  return (
    <div>

        <h1>CartCount - {count}</h1>
    </div>
  )
}
