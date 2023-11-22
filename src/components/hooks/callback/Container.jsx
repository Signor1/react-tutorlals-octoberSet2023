import { useState, useCallback } from "react"
import Title from "./Title"
import Count from "./Count"
import Button from "./Button"


const Container = () => {
    const [age, setAge] = useState(18)
    const [salary, setSalary] = useState(10000)

    const incrementAge = useCallback(() => {
        setAge(age + 1)
    }, [age])

    const incrementSalary = useCallback(() => {
        setSalary(salary + 5000)
    }, [salary])

    return (
        <div>
            <Title />
            <Count title="Age" count={age} />
            <Button handleClick={incrementAge}>Increase Age</Button>
            <Count title="Salary" count={salary} />
            <Button handleClick={incrementSalary}>Increase Salary</Button>
        </div>
    )
}

export default Container