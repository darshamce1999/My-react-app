
export function CustomHook(searchText, studentName) {

    const filterData = studentName.filter((data)=>{
        return data.toLowerCase().includes(searchText.toLowerCase())
    })

    return [...filterData]

}
