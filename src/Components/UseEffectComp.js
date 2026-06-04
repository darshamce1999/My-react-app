import { useEffect } from "react"

export const UseEffectComp = () => {
    // const [count, setCount] = useState()
    // const a=[1,2,3]
    // const b = [...a];
    // b.push()

    const c ="Darshan";
    let output=""
    for(let i=c.length-1; i>=0; i--) {
        output = output+c.charAt(i);
    }
    console.log(output)
    
    // useEffect(()=>{
    //     if(count==0) {
    //     fetch('').then((res)=>res.json()).then(()=>)
    //     return () =>{
            
    //     }
        
    // }, [count])

    return <p>aa</p>

}