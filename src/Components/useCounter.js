import React, {useState} from 'react'

export function useCounter(value) {
    const [count, setCount] = useState(value)

    function incr() {
        setCount(count + 1)
    }

    function decr() {
        setCount(count - 1)
    }

    function reset() {
        setCount(value)
    }

    return {count, incr, decr, reset}
}
  
