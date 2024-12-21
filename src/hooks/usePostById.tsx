import { useState, useEffect } from "react"

import { IPost } from "../interfaces"

export function usePostById(id: number | undefined) {
    const [post, setPost] = useState< IPost >()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function getPostById() {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`)
            const data = await response.json()
            setIsLoading(false)
            setPost(data)
        }
        getPostById()
    }, [])

    return {
        post: post,
        isLoading: isLoading
    }
}