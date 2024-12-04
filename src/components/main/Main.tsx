import { Post } from '../post/Post';
import { Footer } from '../footer/Footer';

import './Main.css';

export function PostList() {
    const posts = [
        { id: 0, title: 'Post 1', description: 'This is the content of Post 1', image: 'https://i0.wp.com/picjumbo.com/wp-content/uploads/autumn-leaves-fall-colors-seamless-pattern-free-image.png?w=1500&quality=50', author: 'Dima'},
        { id: 1, title: 'Post 2', description: 'This is the content of Post 2', image: 'https://i0.wp.com/picjumbo.com/wp-content/uploads/autumn-leaves-fall-colors-seamless-pattern-free-image.png?w=1500&quality=50', author: 'Anton'},
        { id: 2, title: 'Post 3', description: 'This is the content of Post 3', image: 'https://i0.wp.com/picjumbo.com/wp-content/uploads/autumn-leaves-fall-colors-seamless-pattern-free-image.png?w=1500&quality=50', author: 'Ivan'},
    ];
    return (
        <div id='mainCont'>
            <Footer></Footer>
            <div id='postsCont'>
                {posts.map( (post) => {
                    return <Post key={post.id} title={post.title} description={post.description} image={post.image} author={post.author}></Post>
                })}
            </div>
        </div>
    )
}