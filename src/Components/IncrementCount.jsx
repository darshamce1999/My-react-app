import React, { useState } from 'react'
import ClickCounter, { HoverCounter } from './ClickCounter'

function IncrementCount() {
    const [count, setCount] = useState(0)

    function incfn() {
        setCount(count +1)
    }

    function decFn() {
        setCount(count -1)
    }

  return (
    <div>
        {count}
        <button onClick={incfn}>+</button>
        <button onClick={decFn}>-</button>
    </div>
  )
}

export default IncrementCount