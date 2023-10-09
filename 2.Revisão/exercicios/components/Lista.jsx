export default function Lista(props) {
    return(
        <ul style={{listStyle:"none"}}>
            {props.children}
        </ul>
    )
}