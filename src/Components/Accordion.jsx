import React, { useState } from 'react'

function Accordion(props) {
    const [open, setOpen] = useState(false)
    

  return (
    <>  
        <h1 style={{background: "grey"}} onClick={() => setOpen(!open)} >{props.head}</h1>
        {open && <>
            <h4>{props.content}</h4>
            {props.child && <Accordion head={"Accordion2"} content= "acgygghggg buguh" child={false}/>}
          </>}
    </>
  )
}

export default Accordion