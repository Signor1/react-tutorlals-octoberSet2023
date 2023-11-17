import { useContext } from "react"
import { User } from "../../../App"


const ContextTwo = () => {
    const user = useContext(User)
    return (
        <div>
            <h2>Context Example</h2>

            <p>{user?.firstName}</p>
            <p>{user?.lastName}</p>
            <p>{user?.email}</p>
            <p>{user.status}</p>
        </div>
    )
}

export default ContextTwo