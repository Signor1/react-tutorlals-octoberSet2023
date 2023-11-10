import { useState } from 'react'
import styles from "./ExampleFive.module.css"

const ExampleFive = () => {
    //array of objects
    const [todos, setTodos] = useState([])
    // initial state
    const initialState = {
        name: "",
        detail: "",
        startTime: "",
        endTime: ""
    }
    const [data, setData] = useState(initialState)

    const handleTodoUpdate = (e) => {
        e.preventDefault()
        setTodos([...todos, data])
        setData(initialState)
    }

    return (
        <section className={styles.container}>
            <h1 className={styles.todo}>Todo Lists</h1>
            <main className={styles.main}>
                {
                    todos.length === 0 ?
                        (<h2 className={styles.nothing}>There is nothing in the todo list</h2>)
                        :
                        (<ul className={styles.listContainer}>
                            {
                                todos.map((todo, index) => (
                                    <li className={styles.list} key={index}>
                                        <h3>{todo.name}</h3>
                                        <p>{todo.detail}</p>
                                        <div>
                                            <span>Start: {todo.startTime}</span>
                                            <span>End: {todo.endTime}</span>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>)
                }

            </main>
            <form className={styles.form} onSubmit={handleTodoUpdate}>
                {/* todo title */}
                <input className={styles.input} type="text"
                    value={data.name}
                    onChange={e => setData({ ...data, name: e.target.value })}
                    placeholder='Enter todo name' />

                {/* todo details */}
                <textarea className={styles.textarea} placeholder='Enter todo details'
                    value={data.detail}
                    onChange={e => setData({ ...data, detail: e.target.value })}></textarea>

                {/* todo start time  */}
                <input className={styles.input} type="date"
                    placeholder='Enter start date'
                    value={data.startTime}
                    onChange={e => setData({ ...data, startTime: e.target.value })}
                />

                {/* todo end time  */}
                <input className={styles.input} type="date"
                    placeholder='Enter end date'
                    value={data.endTime}
                    onChange={e => setData({ ...data, endTime: e.target.value })}
                />

                <button className={styles.btn} type='submit'>Create Todo</button>
            </form>
        </section>
    )
}

export default ExampleFive