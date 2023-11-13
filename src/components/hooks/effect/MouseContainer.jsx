import { useState } from 'react'
import EffectThree from './EffectThree'

const MouseContainer = () => {
    const [isShowing, setIsShowing] = useState(true)
    //this is connected to the cleanup function
    return (
        <div>
            <h2>Toggle Display</h2>
            <button onClick={() => setIsShowing(!isShowing)}>Click to toggle</button>

            {isShowing && <EffectThree />}
        </div>
    )
}

export default MouseContainer