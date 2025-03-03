import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Layout } from "../shared/Layout/Layout"

import { PostPage } from "../pages/PostPage/PostPage"
import { PostList } from "../pages/PostListPage/PostList"
import { LikedPostsPage } from '../pages/LikedPostsPage/LikedPostsPage'

import { LoginPage } from "../pages/LoginPage/LoginPage"
import { RegisterPage } from "../pages/RegisterPage/RegisterPage"

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Можно упростить немного подключение компонентов */}
                {/* <Route path='/' element={<PostList></PostList>}></Route> */} {/* -> */} {/* <Route path='/' element={<PostList />} />*/}
                
                
                <Route path='/' element={<Layout></Layout>}>
                    {/* В рутах должны быть только Page. Вместо PostList -> PostListPage */}
                    <Route path='/' element={<PostList></PostList>}></Route>
                    <Route path='/post/:id' element={<PostPage></PostPage>}></Route>
                    <Route path='/liked' element={<LikedPostsPage></LikedPostsPage>}></Route>
                    {/* Лучше вынести в отдельный компонент NotFoundPage и переместить в конец всех рутов */}
                    <Route path='*' element={<h1>Page not found</h1>}></Route>
                    <Route path='/login' element={<LoginPage></LoginPage>}></Route>
                    <Route path='/register' element={<RegisterPage></RegisterPage>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}