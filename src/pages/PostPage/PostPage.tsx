import { useParams } from "react-router-dom"

import { usePostById } from "../../hooks/usePostById"
import { Loading } from "../../shared/Loading/Loading"

import "./PostPage.css"

export function PostPage() {
    const params = useParams()
    const { post, isLoading } = usePostById(Number(params.id))

    if (isLoading) {
        return (
            <div id="loadingCont">
                <Loading/>
            </div>
        )
    }

    return (
        <div id="postPageCont">
            <p id="postPageAuthor">{post?.author}</p>
            <img id="postPageImg" src={post?.image} alt="" />
            <p id="postPageDesc">{post?.description}</p>
        </div>
    )
}

