import { useState, useEffect } from "react"

import { IPost } from "../shared/Interfaces/Interfaces"

export function usePostById(id: number) {
    const [post, setPost] = useState< IPost >()
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState< string >()

    useEffect(() => {
        async function getPostById() {
            try {
                const response = await fetch(`http://localhost:8000/api/post/${id}`)
                const data = await response.json()
                setPost(data.data)
            } catch (error) {
                const err = error as string
                setError(`${err}`)
            } finally {
                setIsLoading(false)
            }
        }
        getPostById()
    }, [])

    return {
        post: post,
        isLoading: isLoading,
        error: error
    }
}