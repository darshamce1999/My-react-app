

export const HeaderComp = () => {

    const arr= ["flower","flow","flight"];


    const refValue= arr[0];
    for(let i=arr[0].length; i>0; i--) {
        const output = refValue.substring(0, i)
        const isTrue = arr.every((value)=> 
            value.startsWith(output)
        )
        if(isTrue) {
            console.log(output)
            break
        }
    }
    

    return <h1>Header comp </h1>
}