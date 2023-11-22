import React from "react"


const Title = () => {
    console.log('rendering title')
    return (
        <div>Title - useCallBack Hook</div>
    )
}

export default React.memo(Title)