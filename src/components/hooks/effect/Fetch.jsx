import axios from 'axios';
import { useEffect, useState } from 'react'

const Fetch = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const path = "https://jsonplaceholder.typicode.com/posts";
        axios.get(path)
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, [])

    return (
        <div>
            <h4>List of Posts</h4>

            <ul>
                {
                    data.map(post => (
                        <li key={post.id}>
                            <h4>{post.title}</h4>
                            <p>{post.body} </p>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Fetch