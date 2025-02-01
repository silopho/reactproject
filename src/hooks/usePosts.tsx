import { useState, useEffect } from "react"

import { IPost } from "../shared/Interfaces/Interfaces"

export function usePosts() {
    const [posts, setPosts] = useState< IPost[] >([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState< string >()

    useEffect(() => {
        async function getPosts () {
            try {
                const response = await fetch('https://fakestoreapi.com/products')
                const data = await response.json()
                setPosts(data)
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