import { useState, useEffect } from 'react'

const EffectOne = () => {
    const [count, setCount] = useState(0)

    //Simple use of useEffect to update document title
    useEffect(() => {
        console.log('useEffect mounted')
        window.document.title = `Clicked ${count} times`;
    })

    return (
        <button onClick={() => setCount(prevState => prevState + 1)}>You clicked {count} times</button>
    )
}

export default EffectOne