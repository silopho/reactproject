import { useState, useEffect, useRef, useContext } from "react"
import { Link } from "react-router-dom"

import { IPost } from "../../../interfaces"

import { postsContext } from "../../../App"

import "./PostCard.css"

export function Post(props: IPost){
    const [likes, setLikes] = useState(0);
    const [liked, setLiked] = useState(false);
    const [likedId, setLikedId] = useState< string | undefined >(undefined)

    const likedPosts = useContext(postsContext)

    function incrementLikes() {
        if (liked) {
            setLikes(likes-1)
            setLiked(false)
            setLikedId(undefined)
            console.log(props.id)
        } else {    
            setLikes(likes+1)
            setLiked(true)
            setLikedId("liked")
            console.log(props.id)
            likedPosts.addToLikedPosts(props)
        }
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
                    <button id={likedId} onClick={incrementLikes}>👍</button>
                </div>
            </div>
    </div>
    )
}