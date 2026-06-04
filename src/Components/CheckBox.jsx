import { Button } from '@mui/material'
import React, { useState } from 'react'
import { forwardRef } from 'react';

function CheckBox(props) {
    const propValue = 5
    const arrValue = new Array(propValue).map(data => false);
    const stateValue = []
    for(let i=0; i<arrValue.length; i++) {
        stateValue[i] = false
    }
    const [state, setState] = useState([...stateValue])

    console.log(stateValue)


  return <>
    <Button onClick={() => {
        const res = [...state]
        const shiftedVAlue = res.shift()
        res.push(shiftedVAlue)
        setState([...res])
    }}>Backword</Button>

    {state.map((data, index) => {
        return <input type="checkbox" onChange={(event) => {
                    const res = [...state]
                    res[index] = !state[index]
                    setState([...res])
                    }}
                    key={index}
                    checked={data}
                />
    })}

    <Button onClick={() => {
        const res = [...state]
        const popedValue = res.pop()
        res.unshift(popedValue)
        setState([...res])
    }}>Forward</Button>
  </>
}

export default CheckBox