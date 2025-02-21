import { useState, useEffect } from "react"

import { IPost } from "../shared/types/types"

export function usePosts() {
    const [posts, setPosts] = useState< IPost[] >([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState< string >()

    useEffect(() => {
        async function getPosts () {
            try {
                const response = await fetch('http://localhost:8000/api/post/all')
                const data = await response.json()
                setPosts(data.data)
            } catch (error) {
                const err = error as string
                setError(`${err}`)
            } finally {
                setIsLoading(false)
            }
        }
        getPosts()
    }, [])

    return {
        posts: posts,
        isLoading: isLoading,
        error: error
    }
}