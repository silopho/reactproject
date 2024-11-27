import { useState } from "react"

interface IPost{
    title: string;
    description: string;
    image: string;
    author: string
}

export function Post(props: IPost){
    const [likes, setLikes] = useState(0);
    const [liked, setLiked] = useState(false);

    function incrementLikes() {
        setLikes(likes+1);
        setLiked(true);
    }
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <img src={props.image} alt="" />
            <p>Автор: {props.author}</p>
            <p>Лайки: {likes}</p>
            <button onClick={incrementLikes} disabled={liked}>👍</button>
        </div>
    )
}