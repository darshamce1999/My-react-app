import { useEffect, useState } from "react"
import style from "./ToDoComp.module.css"

export const ToDoComp = () => {
    const [todo, setToDo] = useState([]);

    useEffect(()=>{
        fetch('https://dummyjson.com/todos')
            .then(res => res.json())
            .then(data => {
                setToDo(data.todos)
            })
    }, [])

    return <>
        {todo.map((data)=>{
            return <p className={data.completed? style.completed: style.notCompleted} key={data.id}>{data.todo}</p>
        })}
        {todo.length === 0 && <p>Loading...</p>}
    </>

}