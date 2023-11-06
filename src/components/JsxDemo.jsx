import { List } from "./List"


const JsxDemo = () => {
    const a = 15
    const b = 20
    const result = a + b

    const isOnline = false

    const names = ['Kingsley', 'Obi', 'Kelvin', 'Linda', 'Amaka', 'Precious', 'Emeka', 'Victor']

    return (
        <div>
            <label htmlFor=""></label>
            {/* <ul>
                <List />
                <List />
                <List />
            </ul> */}
            <h4>{result}</h4>
            {isOnline ? <p>Online</p> : <p>Offline</p>}
            <h1>Number of Students: {names.length}</h1>
            {
                // names.map((name, index) => (
                //     <h3 key={index}>{name}</h3>
                // ))
                names.map(name => {
                    // let title = 'Mr'
                    return (
                        <h3 key={name}>Mr. {name}</h3>
                    )
                })
            }
            {/* React Comment */}
        </div>
    )
}

export default JsxDemo