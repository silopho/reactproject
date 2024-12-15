import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import './Post.css'

interface IPost{
    id: number;
    title: string;
    description: string;
    image: string;
    author: string;
    category: string;
}

export function Post(props: IPost){
    const [likes, setLikes] = useState(0);
    const [liked, setLiked] = useState(false);

    function incrementLikes() {
        setLikes(likes+1);
        setLiked(true);
    }

    return (
        <div className="postCont">
            <Link to={`/post/${props.id}`} className="postImgCont">
                <img src={props.image} alt="" />
            </Link>
            <div className="postDesc">
                <Link to={`/post/${props.id}`}>
                    <h3>{props.title}</h3>
                    <p>Автор: {props.author}</p>
                </Link>
                <div className="postLikes">
                    <p>Лайки: {likes}</p>
                    <button onClick={incrementLikes} disabled={liked}>👍</button>
                </div>
            </div>
    </div>
    )
}