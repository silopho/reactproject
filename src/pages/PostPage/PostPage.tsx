import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import { usePostById } from "../../hooks/usePostById"
import { IPost } from "../../interfaces"

import "./PostPage.css"

export function PostPage() {
    const params = useParams()
    const { post } = usePostById(Number(params.id))

    return (
        <div id="postPageCont">
            <p>{post?.author}</p>
            <img src={post?.image} alt="" />
            <p>{post?.description}</p>
        </div>
    )
}

