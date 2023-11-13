import { useEffect, useState } from "react"


const EffectTwo = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    // Conditionally run effect with dependency array
    useEffect(() => {
        console.log('Logged effect')
        window.document.title = `you clicked ${count} times`;

    }, [count])
    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />

            <button onClick={() => setCount(count + 1)}>Count {count}</button>
        </div>
    )
}

export default EffectTwo