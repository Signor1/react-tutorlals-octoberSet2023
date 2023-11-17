import { useReducer } from "react"

const initialState = {
    firstCount: 0,
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { firstCount: state.firstCount + action.value }
        case 'decrement':
            return { firstCount: state.firstCount - action.value }
        case 'reset':
            return initialState
        default:
            return state
    }
}

const ReduceTwo = () => {

    const [numbers, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <h2>Current Count - {numbers.firstCount}</h2>

            <button onClick={() => dispatch({ type: 'increment', value: 1 })}>Increment by 1</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>Decrement by 1</button>
            <button onClick={() => dispatch({ type: 'increment', value: 10 })}>Increment by 10</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>Decrement by 5</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
    )
}

export default ReduceTwo