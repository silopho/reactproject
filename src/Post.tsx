interface IPost{
    title: string;
    description: string;
    image: string;
    author: string
}

export function Post(props: IPost){
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <img src={props.image} alt="" />
            <p>Автор: {props.author}</p>
        </div>
    )
}