import { useEffect, useState } from 'react'

const EffectThree = () => {
    const [x, setX] = useState('')
    const [y, setY] = useState('')

    const movePosition = e => {
        console.log('move position')
        setX(e.clientX)
        setY(e.clientY)
    }
    //run the useEffect only once
    useEffect(() => {
        console.log('useEffect runs')
        window.addEventListener('mousemove', movePosition)

        //cleanup function
        return () => {
            window.removeEventListener('mousemove', movePosition)
        }
    }, [])
    return (
        <div>
            <h1>X Position - {x}</h1>
            <h1>Y Position - {y}</h1>
        </div>
    )
}

export default EffectThree