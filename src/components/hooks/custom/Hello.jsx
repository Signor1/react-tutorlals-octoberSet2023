import useGreet from "./useGreet"


const Hello = () => {
    const [title, welcome] = useGreet("Omemgboji", "Kodex")
    return (
        <div>
            <h3>From custom Hook</h3>
            <h1>{title()}</h1>
            <h1>{welcome()}</h1>
        </div>
    )
}

export default Hello