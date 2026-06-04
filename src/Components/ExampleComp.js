import { Button, Input, Stack } from "@mui/material"
import { useState } from "react"

export const ExampleComp = ({data, column}) => {
    // const data = ['India', 'USA', 'UK', "Australia", 'Canada', 'Germany', 'Russia', 'Finland']
    const [searchResult, setSearchResult] = useState([])
    const [sortType, setSortType] = useState('asc')

    function handleSearch(text) {
        const search = data.filter(item=> {
            return item.toLowerCase().includes(text.toLowerCase())
        })
        setSearchResult(search);
    }

    function handleSort() {
        if(sortType === 'asc') {
            setSortType('desc')
            const desSort = searchResult.sort()
            setSearchResult(desSort.reverse())
        } else {
            setSortType('asc')
            setSearchResult(searchResult.sort())
        }
    }

    return <>
        <Stack sx={{width:"200px"}}>
        <Input onChange={(event)=>{
            handleSearch(event.target.value)
        }}/>
        <table>
            <tr>
                <th>
                    <Button onClick={()=>{
                        handleSort()
                    }}>{column}</Button>
                </th>
            </tr>
            {searchResult.map(data=>{
                return (<tr>
                            <td>
                                {data} 
                            </td>
                    </tr>)
            })}
        </table>
        </Stack>
    </>
}



















// return <>
    //     <Input onChange={(event)=>{
    //         handleSearch(event.target.value)
    //     }}/>
    //     <Button onClick={()=>{
    //         handleSort()
    //     }}>{column}</Button>
    //     <br></br>
    //     {searchResult.map(data=>{
    //         return <p key={data}>{data}</p>
    //     })}
    // </>