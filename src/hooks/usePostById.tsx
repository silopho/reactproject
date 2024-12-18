import { useState, useEffect } from "react"

import { IPost } from "../interfaces"

export function usePostById(id: number) {
    const [post, setPost] = useState< IPost >()

    useEffect(() => {
        async function getPostById() {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`)
            const data = await response.json()
            setPost(data)
        }
        getPostById()
    }, [])

    return {post: post}
}