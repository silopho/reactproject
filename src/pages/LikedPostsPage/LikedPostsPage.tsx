import { useState, useEffect } from "react"

import { usePostContext } from "../../contexts/likedPostsContext"

// отлиное использование PostCard!
import { Post } from "../../shared/PostList/PostCard/PostCard"

export function LikedPostsPage() {
    // не понял зачем loading
    const [ isLoading, setIsLoading ] = useState< boolean >(true)
    // смотри внимательно, не импортируй весь объект контекста, лучше только то, что тебе нужно
    // const { likedPosts } = usePostContext()
    
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
                            name={post.name}
                            text={post.text}
                            image={post.image}
                            user={post.user}
                            date={post.date}
                            category={post.category}
                        ></Post>
                    })}
                </div>
            </div>
        </div>
    )
}