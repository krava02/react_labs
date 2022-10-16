import {useState} from "react"

const Task6 = () => {
    const [color, setColor] = useState('black')
    return (
        <>
            <h1>Task6</h1>
            <div><h1 style={{color: color}}>I am a {color} Product!</h1></div>
            <select onChange={(e) => {
                setColor(e.target.value)
            }}>
                <option value='black'>black</option>
                <option value='red'>red</option>
                <option value='green'>green</option>
                <option value='yellow'>yellow</option>
            </select>
        </>
    )
}

export default Task6