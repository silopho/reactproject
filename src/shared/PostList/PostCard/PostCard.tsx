// Импорт не используется, нужно убрать
import { useState, useEffect, useRef, useContext } from "react"
import { Link } from "react-router-dom"

import { IPost } from "../../types/types"
// Импорт postsContext не используется, нужно убрать
import { postsContext, usePostContext } from "../../../contexts/likedPostsContext"

import "./PostCard.css"


// по лайкам, если хочешь реалзиовать их функционал, тогда лучше добавить в интерфейс поста свойство likes и добавить в модель на Backend

// Для упрощения работы с props, лучше сделать объект с свойством post и значением IPost
// export function Post({post}: {post: IPost}){
export function Post(props: IPost){
    const [likes, setLikes] = useState(0);
    // состояние для изменения стилей не лучший способ
    const [likedId, setLikedId] = useState< string >("postLikeButton")

    const { likedPosts, addToLikedPosts, removeFromLikedPosts, isLiked } = usePostContext()

    function incrementLikes(post: IPost) {
        if (isLiked(post.id)) {
            // если пост есть, то он будет в массиве, не нужно проверка на likedPosts
            if (likedPosts) {removeFromLikedPosts(post.id)}
            setLikes(likes-1)
            setLikedId("postLikeButton")
            // консоль лог лишний
            console.log(likedPosts)
        } else {    
            setLikes(likes+1)
            setLikedId("postLikedButton")
            // консоль лог лишний
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
                    {/* Если правильно понял, то вводить состояние не лучший вариант для изменения стилей  */}
                    {/* можно -> */}
                    {/* <button id={isLiked() ? 'likedPost': 'likePost} onClick={() => incrementLikes(props)}>👍</button> */}
                    <button id={likedId} onClick={() => incrementLikes(props)}>👍</button>
                </div>
            </div>
    </div>
    )
} 