import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createContext } from 'react';

import { Layout } from "./shared/Layout/Layout";
import { PostPage } from "./pages/PostPage/PostPage";
import { PostList } from "./pages/PostListPage/PostList";

import { IPost } from "./interfaces";

const initalPosts: IPost[] = []
const postsContext = createContext< IPost[] >(initalPosts)

export function App(){
    return(
        <postsContext.Provider value={[]}>
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