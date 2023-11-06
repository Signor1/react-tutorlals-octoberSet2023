

export const List = ({ data }) => {

    return (
        <>
            {
                data.map(link => (
                    <li key={link.name}>
                        <a href={link.link}>{link.name}</a>
                    </li>
                ))
            }

        </>
    )
}