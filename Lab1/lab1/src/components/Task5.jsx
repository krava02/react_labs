import {useState} from "react"

const Task5 = () => {
    const [setCity] = useState('Chicago')
    return (
        <>
            <h1>Task5</h1>
            <select onChange={(e) => {
                setCity(e.target.value)
            }}>
                <option value='Chicago'>Chicago</option>
                <option value='New York'>New York</option>
                <option value='Los Angeles'>Los Angeles</option>
                <option value='Kyiv'>Kyiv</option>
            </select>
        </>
    )
}

export default Task5