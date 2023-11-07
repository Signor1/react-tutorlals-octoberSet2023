import { useState } from 'react'

const ExampleTwo = () => {
    //string 
    const [name, setName] = useState("")

    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <button onClick={() => window.alert(name)}>Show Name</button>
        </div>
    )
}

export default ExampleTwo