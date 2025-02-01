import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Layout } from "../shared/Layout/Layout";
import { PostPage } from "../pages/PostPage/PostPage";
import { PostList } from "../pages/PostListPage/PostList";
import { LikedPostsPage } from '../pages/LikedPostsPage/LikedPostsPage';

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout></Layout>}>
                    <Route path='/' element={<PostList></PostList>}></Route>
                    <Route path='/post/:id' element={<PostPage></PostPage>}></Route>
                    <Route path='/liked' element={<LikedPostsPage></LikedPostsPage>}></Route>
                    <Route path='*' element={<h1>Page not found</h1>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}