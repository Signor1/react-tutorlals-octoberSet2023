import "./NormalStyling.css";

const NormalStyling = () => {
    const circleShape = {
        width: "200px",
        height: "200px",
        backgroundColor: "coral",
        margin: "3rem auto",
        borderRadius: "50%"
    }
    return (
        <>
            <h1 className="normal">Normal Styling</h1>
            <p style={{ color: "blue", fontSize: "2rem", textAlign: "center" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum repudiandae hic quibusdam tenetur nesciunt praesentium nobis, error, suscipit nostrum assumenda quos doloribus mollitia corporis quaerat necessitatibus omnis fugiat a! Repellat?</p>
            <div style={circleShape}></div>
        </>
    )
}

export default NormalStyling