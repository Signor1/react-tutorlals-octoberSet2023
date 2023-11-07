import { useState } from 'react'

const ExampleOne = () => {
    //bolean
    const [isTrue, setIsTrue] = useState(false)

    //function for changing the state
    const toggleState = () => {
        setIsTrue(!isTrue);
    }

    return (
        <div>
            {
                isTrue ? (
                    <h1>I am learning now</h1>
                ) : (
                    <h1>I am avaliable now</h1>
                )
            }
            <button onClick={toggleState}>Toggle</button>
        </div>
    )
}

export default ExampleOne


export const SiderBar = () => {
    const [open, setOpen] = useState(false)

    const siderBarOpen = {
        width: "350px",
        height: "100vh",
        position: "fixed",
        zIndex: "99",
        top: "0",
        right: "0",
        backgroundColor: "brown",
        color: "white",
        transition: "1s all"
    }
    const siderBar = {
        width: "350px",
        height: "100vh",
        position: "fixed",
        zIndex: "99",
        top: "0",
        right: "-100%",
        backgroundColor: "brown",
        color: "white",
        transition: "1s all"
    }

    return (
        <>
            <section style={open ? siderBarOpen : siderBar}>
                <h1>Side Bar</h1>
            </section>
            <button onClick={() => setOpen(!open)}>
                {open ? "Close Siderbar" : "Open Sidebar"}
            </button>
        </>

    )
}