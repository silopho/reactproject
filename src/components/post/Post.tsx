import { useState } from "react"
import './Post.css'

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
        <div className="postCont">
            <div className="postImgCont">
                <img src={props.image} alt="" />
            </div>
            <div className="postDesc">
                <h3>{props.title}</h3>
                <p>Автор: {props.author}</p>
                <div className="postLikes">
                    <p>Лайки: {likes}</p>
                    <button onClick={incrementLikes} disabled={liked}>👍</button>
                </div>
            </div>
        </div>
    )
}