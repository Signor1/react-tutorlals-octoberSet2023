import { useMemo, useState } from "react"


const Demo = () => {
    const [countOne, setCountOne] = useState(0)
    const [countTwo, setCountTwo] = useState(0)

    const incrementOne = () => {
        setCountOne(countOne + 1)
    }

    const incrementTwo = () => {
        setCountTwo(countTwo + 1)
    }

    const isEven = useMemo(() => {
        // let i = 0;
        // while (i < 2000) i++
        return countOne % 2 === 0;
    }, [countOne])

    return (
        <div style={{ width: "200px", margin: "3rem auto" }}>
            <button onClick={incrementOne}>useMemo countOne {countOne}</button>
            <p>{isEven ? 'Even' : 'Odd'}</p>
            <button onClick={incrementTwo}>useMemo countTwo {countTwo}</button>
        </div>
    )
}

export default Demo