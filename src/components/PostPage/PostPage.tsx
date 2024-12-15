import './PostPage.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

interface IPost{
    id: number;
    title: string;
    description: string;
    image: string;
    author: string;
    category: string;
}

export function PostPage() {
    const params = useParams()
    const [post, setPost] = useState<IPost>()

    useEffect(() => {
        async function getPost(){
            const response = await fetch(`https://fakestoreapi.com/products`)
            const posts = await response.json()
            const postData = posts.find((postData: IPost) => postData.id === Number(params.id))
            setPost(postData)
            console.log(post)
        }
        getPost()
    }, [])

    if (!post) {
        return <div>
            <h1>...</h1>
        </div>
    }

    return (
        <div id="postPageCont">
            <h1>{post.id}</h1>
            <p>{post.description}</p>
        </div>
    )
}

