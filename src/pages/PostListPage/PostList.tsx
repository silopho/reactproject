import { useState, useEffect } from "react";

import { usePosts } from "../../hooks/usePosts";
import { IPost } from "../../interfaces"
import { Post } from "../../shared/PostList/PostCard/PostCard";

import "./PostList.css";

export function PostList() {
    const { posts } = usePosts()

    const [filteredPost, setFilteredPost] = useState(posts)
    const [selectedFilter, setSelectedFilter] = useState("all")

    useEffect(() => {
        if (selectedFilter == "all") {
            setFilteredPost(posts)
        } else {
            setFilteredPost(posts.filter((post: IPost) => {
                return post.category == selectedFilter
            }))

        }
    }, [posts, selectedFilter])

    return (
        <div>
            <div id="PostsListCont">
                <div id="filterCont">
                    <select name="Filter" id="filterSelect" onChange={(event) => {
                        setSelectedFilter(event.target.value)
                    }}>
                        <option value="all">Все</option>
                        <option value="films">Фильмы</option>
                        <option value="games">Игры</option>
                        <option value="animals">Животные</option>
                        <option value="ad">Реклама</option>
                    </select>
                </div>
                <div id="postsCont">
                    {filteredPost.map((post) => {
                        return <Post 
                            key={post.id}
                            id={post.id}
                            title={post.title}
                            description={post.description}
                            image={post.image}
                            author={post.author}
                            category={post.category}
                        ></Post>
                    })}
                </div>
            </div>
        </div>
    )
}