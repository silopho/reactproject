import { Post } from './Post';

export function PostList() {
    const posts = [
        { id: 0, title: 'Post 1', description: 'This is the content of Post 1', image: '', author: 'Dima'},
        { id: 1, title: 'Post 2', description: 'This is the content of Post 2', image: '', author: 'Anton'},
        { id: 2, title: 'Post 3', description: 'This is the content of Post 3', image: '', author: 'Ivan'},
    ];
    return (
        <div>
            {posts.map( (post) => {
                return <Post key={post.id} title={post.title} description={post.description} image={post.image} author={post.author}></Post>
            })}
        </div>
    )
}