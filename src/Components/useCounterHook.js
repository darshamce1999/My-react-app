import React, { useState } from 'react'

export function CounterHook(initialVal) {
    const [state, setState] = useState(initialVal)

    function increment() {
        setState(state + 1)
    }

    function decrement() {
        setState(state - 1)
    }

  return {state, increment, decrement}
}