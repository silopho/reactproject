import { Post } from '../Post/Post';
import { useState, useEffect } from 'react';

import './Main.css';

export function Main() {
    const posts = [
        { id: 0, title: 'Товары из китая на Aliexpress', description: '', image: '/images/post/0.jpg', category: 'ad', author: 'Dima'},
        { id: 1, title: 'Пудж попал хуком 😈', description: '', image: '/images/post/1.jpg', category: 'games', author: 'Anton'},
        { id: 2, title: 'Легендарный "Гарри Поттер"', description: '', image: '/images/post/2.jpg', category: 'films', author: 'Ivan'},
        { id: 3, title: 'Слишком серьйозный', description: '', image: '/images/post/3.jpg', category: 'animals', author: 'Oleg'},
        { id: 4, title: 'dosia прячится в сортире 😱', description: '', image: '/images/post/4.jpg', category: 'games', author: 'Andrew'},
    ];

    const [filteredPost, setFilteredPost] = useState(posts)
    const [selectedFilter, setSelectedFilter] = useState('all')

    useEffect(() => {
        if (selectedFilter == 'all') {
            setFilteredPost(posts)
        } else {
            setFilteredPost(posts.filter( (post) => {
                return post.category === selectedFilter
            }))
        }
    }, [selectedFilter])

    useEffect(()=>{
        async function getProducts(){
            const response = await fetch('https://fakestoreapi.com/products')
            const products = await response.json()
            setFilteredPost(products)
        }
        getProducts()
    },[])

    return (
        <div>
            <div id='mainCont'>
                <div id='filterCont'>
                    <select name='Filter' id='filterSelect' onChange={(event) => {
                        setSelectedFilter(event.target.value)
                    }}>
                        <option value="all">Все</option>
                        <option value="films">Фильмы</option>
                        <option value="games">Игры</option>
                        <option value="animals">Животные</option>
                        <option value="ad">Реклама</option>
                    </select>
                </div>
                <div id='postsCont'>
                    {filteredPost.map( (post) => {
                        return <Post key={post.id} id={post.id} title={post.title} description={post.description} image={post.image} author={post.author}></Post>
                    })}
                </div>
            </div>
        </div>
    )
}