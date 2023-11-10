import { useState } from 'react'

const ExampleFour = () => {
    //array of strings
    const [names, setNames] = useState([])
    const [value, setValue] = useState('')

    const handleUpload = () => {
        setNames([...names, value])
    }

    const containerStyles = {
        width: "500px", display: "flex", flexDirection: "column", gap: "1rem", margin: "3rem auto"
    }
    const inputStyles = {
        width: "100%", height: "35px", outline: "none", border: "1px solid blue", borderRadius: "10px", paddingInline: "1rem"
    }
    const buttonStyle = {
        padding: "12px 20px", backgroundColor: "blue", color: "white", outline: "none", border: "none"
    }

    return (
        <div style={containerStyles}>
            <ul>
                {
                    names.map(name => <li key={name}>{name}</li>)
                }
            </ul>
            <input style={inputStyles} type="text" value={value} onChange={(e) => setValue(e.target.value)} />
            <button style={buttonStyle} onClick={handleUpload}>Upload</button>
        </div>
    )
}

export default ExampleFour