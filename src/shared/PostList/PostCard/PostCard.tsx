import { useState, useEffect, useRef, useContext } from "react"
import { Link } from "react-router-dom"

import { IPost } from "../../types/types"

import { postsContext, usePostContext } from "../../../contexts/likedPostsContext"

import "./PostCard.css"

export function Post(props: IPost){
    const [likes, setLikes] = useState(0);
    const [likedId, setLikedId] = useState< string >("postLikeButton")

    const { likedPosts, addToLikedPosts, removeFromLikedPosts, isLiked } = usePostContext()

    function incrementLikes(post: IPost) {
        if (isLiked(post.id)) {
            if (likedPosts) {removeFromLikedPosts(post.id)}
            setLikes(likes-1)
            setLikedId("postLikeButton")
            console.log(likedPosts)
        } else {    
            setLikes(likes+1)
            setLikedId("postLikedButton")
            console.log(likedPosts)
            if (likedPosts) {addToLikedPosts(post)}
        }
    }

    return (
        <div className="postCont">
            <Link to={`/post/${props.id}`} className="postImgCont">
                <img src={props.image ?? undefined} alt="" />
            </Link>
            <div className="postDesc">
                <Link to={`/post/${props.id}`}>
                    <h3>{props.name}</h3>
                    <p>Автор: {props.user}</p>
                </Link>
                <div className="postLikes">
                    <p>Лайки: {likes}</p>
                    <button id={likedId} onClick={() => incrementLikes(props)}>👍</button>
                </div>
            </div>
    </div>
    )
} 