import { useState } from "react"
import { useParams } from "react-router-dom"

import { usePostById } from "../../hooks/usePostById"
import { Loading } from "../../shared/Loading/Loading"

import "./PostPage.css"

export function PostPage() {
    const params = useParams()
    const { post, isLoading, error } = usePostById(Number(params.id))

    const [likes, setLikes] = useState(0);
    const [liked, setLiked] = useState(false);

    function incrementLikes() {
        if (liked) {
            setLikes(likes-1);
            setLiked(false);
        } else {
            setLikes(likes+1)
            setLiked(true)
        }
    }

    return (
        isLoading === true
        ?
        <div id="loadingCont">
            <Loading/>
        </div>
        :
        !error
        ? 
        <div id="postPageCont">
            <p id="postPageAuthor">{post?.author}</p>
            <img id="postPageImg" src={post?.image} alt="" />
            <div id="postLikes">
                <button id="postLikeButton" onClick={incrementLikes}>👍</button>
                <p>Лайки: {likes}</p>
            </div>
            <p id="postPageDesc">{post?.description}</p>
        </div>
        :
        <p id="error">{error}</p>
    )
}