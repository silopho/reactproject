import { useState, useEffect } from "react"

import { IPost } from "../interfaces"

export function usePostById(id: number | undefined) {
    const [post, setPost] = useState< IPost >()
    useEffect(() => {
        async function getPostById() {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`)
            const data = await response.json()
            setPost(data)
        }
        getPostById()
    }, [])

    
    if (!id) {
        return {}
    }

    return {post: post}
}