import { Button } from "@mui/material";
import { useEffect, useRef, useState } from "react";


export const CounterComp = () => {
    const [count, setCount] = useState(0);
    const [iStarted, setIstarted] = useState(false);

    useEffect(()=> {
        let clear;
        if(iStarted) {
            clear = setInterval(()=>{
                setCount(prev => prev+1);
            }, 1000)
        } else {
            clearInterval(clear);
            setCount(0);
        }
        return ()=>{
            clearInterval(clear);
        }
    }, [iStarted])

    
    return <>
        <h1>{count}</h1>
        <Button onClick={()=>setIstarted(true)}>Start</Button>
        <Button onClick={()=>setIstarted(false)}>Reset</Button>
    </>
}

//This is not good one, after clicking mutiple start it will going to create multiple instance of setInterval
export const CounterRefComp = () => {
    const [count, setCount] = useState(0);
    const ref = useRef();

    function handleStart() {
        ref.current = setInterval(() => {
            setCount(count => count+1)
        }, 1000);
    }

    function handleReset() {
        clearInterval(ref.current)
        setCount(0)
    }

    return <>
        <p>{count}</p>
        <Button onClick={handleStart}>Start</Button>
        <Button onClick={handleReset}>Stop</Button>
    </>
}
