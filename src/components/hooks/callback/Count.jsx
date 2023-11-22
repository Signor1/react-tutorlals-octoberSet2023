import React from "react"


const Count = ({ title, count }) => {
    console.log('rendering' + title)
    return (
        <div>
            <h1>{title} - {count}</h1>
        </div>
    )
}

export default React.memo(Count)