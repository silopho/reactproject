import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createContext, useState, useEffect } from 'react';

import { Layout } from "./shared/Layout/Layout";
import { PostPage } from "./pages/PostPage/PostPage";
import { PostList } from "./pages/PostListPage/PostList";

import { IPost } from "./interfaces";

interface ILikedPosts {
    likedPosts: IPost[];
    addToLikedPosts: (post: IPost) => void;
}

const initalPosts: ILikedPosts = {likedPosts: [], addToLikedPosts: (post: IPost) => {}}
export const postsContext = createContext< ILikedPosts >(initalPosts)

export function App(){
    const [likedPosts, setLikedPosts] = useState< IPost[] >([])

    function addToLikedPosts(likedPost: IPost) {
        let array = [...likedPosts, likedPost]
        setLikedPosts(array)
        console.log(array)
    }

    return(
        <postsContext.Provider value={{likedPosts: likedPosts, addToLikedPosts: addToLikedPosts}}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout></Layout>}>
                        <Route path='/' element={<PostList></PostList>}></Route>
                        <Route path='/post/:id' element={<PostPage></PostPage>}></Route>
                        <Route path='*' element={<h1>Page not found</h1>}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </postsContext.Provider>
    )
}