import { useState, useEffect } from "react"

import { usePostContext } from "../../contexts/likedPostsContext"
import { usePosts } from "../../hooks/usePosts"

import { Post } from "../../shared/PostList/PostCard/PostCard"
import { Loading } from "../../shared/Loading/Loading"

import { IPost } from "../../shared/Interfaces/Interfaces"

export function LikedPostsPage() {
    const [ isLoading, setIsLoading ] = useState< boolean >(true)
    const likedPosts = usePostContext()

    useEffect(() => {
        if (likedPosts) {
            setIsLoading(true)
        }
    }, [likedPosts])

    return (
        <div>
            <div id="PostsListCont">
                <div id="postsCont">
                    {likedPosts.likedPosts.map((post) => {
                        return <Post 
                            key={post.id}
                            id={post.id}
                            title={post.title}
                            description={post.description}
                            image={post.image}
                            author={post.author}
                            category={post.category}
                        ></Post>
                    })}
                </div>
            </div>
        </div>
    )
}