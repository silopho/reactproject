import { useState, useEffect } from "react"

import { IPost } from "../interfaces"

export function usePosts() {
    const [posts, setPosts] = useState< IPost[] >([])

    useEffect(() => {
        async function getPosts () {
            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json()
            setPosts(data)
        }
        getPosts()
    }, [])

    return {posts: posts}
}