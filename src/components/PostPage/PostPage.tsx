import './PostPage.css'
import { useParams } from 'react-router-dom'

export function PostPage() {
    const params = useParams()
    console.log(params)
    return (
        <div id="postPageCont">
            <h1>{params.id}</h1>
            <p>This is the Post Page. You can see the content of a single post here.</p>
        </div>
    )
}