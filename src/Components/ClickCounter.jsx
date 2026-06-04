import React, { useEffect, useState } from 'react'

function ClickCounter(props) {

  return (
    <>
        <button>Hover</button>
    </>
  )
}

export default ClickCounter


export function HoverCounter(props) {

  return (
    <>
        <p>{props.count}</p>
        <button onMouseOver={(e) => props.incCount(e)}>Hover</button>
    </>
  )
}

