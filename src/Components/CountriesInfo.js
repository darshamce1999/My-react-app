import { Button, Input } from "@mui/material";
import { useEffect, useState } from "react"

export const CountriesInfo = () => {
    const [country, setCountry] = useState()
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState();
    const [sortType, setSortType] = useState(false)

    useEffect(()=> {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => 
             res.json()
        )
        .then(country=> {
            const countries = country.map((data)=> 
                {return {countryName:data.name.common, flags: data.flags}}
                )
            setCountry(countries);
            }
        )
    }, [])

    useEffect(()=> {
        const refinedData = country?.filter((data)=>{
                return data.countryName.toLowerCase().startsWith(search.toLowerCase())
            })
        setFilter(refinedData)
    }, [search, country])

    useEffect(()=> {
        if(sortType) {
            const refinedData = filter?.sort((a,b)=> {
                if(a.countryName.toLowerCase() > b.countryName.toLowerCase()) {
                    return 1
                } else if(a.countryName.toLowerCase() < b.countryName.toLowerCase()) {
                    return -1
                } else {
                    return 0;
                }
            })
            setFilter(refinedData)
        } else if(sortType===false) {
            const refinedData = filter?.sort((a,b)=> {
                if(b.countryName.toLowerCase() > a.countryName.toLowerCase()) {
                    return 1
                } else if(b.countryName.toLowerCase() < a.countryName.toLowerCase()) {
                    return -1
                } else {
                    return 0;
                }
            })
            setFilter(refinedData)
        }
    }, [sortType, filter])

    return (
    <>
    <Input onChange={(event)=> {
        setSearch(event.target.value)
    }}/>
    <br/>
    <Button onClick={()=>setSortType(!sortType)}>Sort {sortType? 'asc': 'desc'} </Button>
    <br/>
    {filter?.map(data =>{
        return <>
        <table>
            <tr>
                <td>{data.countryName}</td>
                <td><img src={data.flags.png} alt={data.countryName} style={{width:'20px',height:'20px'}}/></td>
            </tr>
        </table>
        </>
    })}
    </>
    )
}