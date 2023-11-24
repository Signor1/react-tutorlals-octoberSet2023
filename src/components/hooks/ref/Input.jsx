import { useEffect, useRef } from "react"


const Input = () => {
    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    return (
        <div>
            <input ref={inputRef} type="text" style={{ width: "200px ", height: "35px" }} />
        </div>
    )
}

export default Input