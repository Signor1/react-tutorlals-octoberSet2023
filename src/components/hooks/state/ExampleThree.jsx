import { useState } from 'react'

const ExampleThree = () => {
    //object
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    })

    const formStyles = {
        width: "500px", display: "flex", flexDirection: "column", gap: "1rem", margin: "3rem auto"
    }
    const inputStyles = {
        width: "100%", height: "35px", outline: "none", border: "1px solid blue", borderRadius: "10px", paddingInline: "1rem"
    }
    const buttonStyle = {
        padding: "12px 20px", backgroundColor: "blue", color: "white", outline: "none", border: "none"
    }
    return (
        <form onSubmit={() => window.alert(formData)} style={formStyles}>

            <input type="text" style={inputStyles}
                placeholder='Enter first name'
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} />

            <input type="text" style={inputStyles}
                placeholder='Enter last name'
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} />

            <input type="email" style={inputStyles}
                placeholder='Enter email'
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })} />

            <input type="password" style={inputStyles}
                placeholder='Enter password'
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })} />


            <button type='submit' style={buttonStyle}>Upload</button>

            <div>
                <h1>Output</h1>
                <p>{formData.firstName}</p>
                <p>{formData.lastName}</p>
                <p>{formData.email}</p>
                <p>{formData.password}</p>
            </div>
        </form>
    )
}

export default ExampleThree