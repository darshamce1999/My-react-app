import { IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react'
import StarBorderIcon from '@mui/icons-material/StarBorder';


// Initial - Green
// After 3 seconds -> Yellow
// Praveen Kumar
// 11:50 AM
// After 2 seconds -> Red
// After 5 seconds -> Yellow
// After 2 seconds -> Green
// Repeat



function TrafficLightComp() {
    const [ligts, setLights] = useState({color:'green', order:0})

    useEffect(() => {
        var ref = null;
        if(ligts.color === 'green' && ligts.order === 0) {
            ref = setTimeout(() => {
                setLights({color:'yellow', order:1})
            }, 3000)
        } else if(ligts.color === 'yellow' && ligts.order === 1) {
            ref = setTimeout(() => {
                setLights({color:'red', order:2})
            }, 2000)
        } else if(ligts.color === 'red' && ligts.order === 2) {
            ref =  setTimeout(() => {
                setLights({color:'yellow', order:3})
            }, 5000)
        } else if(ligts.color === 'yellow' && ligts.order === 3) {
            ref = setTimeout(() => {
                setLights({color:'green', order:0})
            }, 2000)
        }

        return(() => {
            clearTimeout(ref)
        })
    }, [ligts.color, ligts.order])

    return (
        <div style={{backgroundColor: `${ligts.color}`, width: "200px", height:"200px"}}>
            🚦
            <IconButton><StarBorderIcon /></IconButton>
        </div>
    )
}

export default TrafficLightComp