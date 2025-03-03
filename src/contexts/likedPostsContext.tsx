import { createContext, ReactNode, useState, useContext } from 'react';

import { IPost } from "../shared/types/types";

interface ILikedPostsContext {
    likedPosts: IPost[];
    addToLikedPosts: (post: IPost) => void;
    removeFromLikedPosts: (id: number) => void;
    isLiked: (id: number) => boolean
}

const initalPosts: ILikedPostsContext = {
    likedPosts: [],
    addToLikedPosts: (post: IPost) => {},
    removeFromLikedPosts: (id: number) => {},
    isLiked: (id: number) => false
}
// не нужно экспортировать контекст, тк есть ниже хук
export const postsContext = createContext< ILikedPostsContext >(initalPosts)

export function usePostContext() {
    return useContext(postsContext)
}

interface ILikedPostsContextProvider {
    // лучше сделать children опциональным
    children: ReactNode
}

export function LikedPostsContextProvider(props: ILikedPostsContextProvider) {
    const { children } = props
    const [likedPosts, setLikedPosts] = useState< IPost[] >([])

    function addToLikedPosts(likedPost: IPost) {
        let array = [...likedPosts, likedPost]
        setLikedPosts(array)
        // консоль лог лучше убрать
        console.log(array)
    }

    function removeFromLikedPosts(id: number) {
        let array = likedPosts.filter((likedPost: IPost) => {
            return likedPost.id !== id
        })
        setLikedPosts(array)
        // консоль лог лучше убрать
        console.log(array)
    }

    function isLiked(id: number) {
        const result = likedPosts.some((post)=>{
            return post.id === id 
        })
        return result
    }

    return (
        <postsContext.Provider 
            value={{
                likedPosts: likedPosts,
                addToLikedPosts: addToLikedPosts,
                removeFromLikedPosts: removeFromLikedPosts,
                isLiked: isLiked
            }}>
                { children }
        </postsContext.Provider>
    )
}