


export default function BlogList(props){

    return (
        <div>
            <h2>{props.title}</h2>
            {props.subTitle && <h3>{props.subTitle}</h3>}
            <p>{props.author}</p>
            <p>{props.date}</p>
        </div>
    )
}