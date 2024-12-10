import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from "./components/Layout/Layout";
import { PostPage } from "./components/PostPage/PostPage";
import { Main } from "./components/Main/Main";


export function App(){
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout></Layout>}>
                        <Route path='/' element={<Main></Main>}></Route>
                        <Route path='/post/:id' element={<PostPage></PostPage>}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}