import { useState, useEffect } from "react"

import { usePosts } from "../../hooks/usePosts"
import { IPost } from "../../shared/Interfaces/Interfaces"
import { Post } from "../../shared/PostList/PostCard/PostCard"
import { Loading } from "../../shared/Loading/Loading"

import "./PostList.css";

export function PostList() {
    const { posts, isLoading, error } = usePosts()

    const [filteredPost, setFilteredPost] = useState(posts)
    const [selectedFilter, setSelectedFilter] = useState("all")

    useEffect(() => {
        if (selectedFilter === "all") {
            setFilteredPost(posts)
        } else {
            setFilteredPost(posts.filter((post: IPost) => {
                return post.category === selectedFilter
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
                {
                    isLoading === true ? (
                        <div id="loadingCont">
                            <Loading/>
                        </div>
                    ) : ( !error ?
                        <div id="postsCont">
                            {filteredPost.map((post) => {
                                return <Post 
                                    key={post.id}
                                    id={post.id}
                                    name={post.name}
                                    text={post.text}
                                    image={post.image}
                                    user={post.user}
                                    date={post.date}
                                    category={post.category}
                                ></Post>
                            })}
                        </div>
                        :
                        <p id="error">{error}</p>
                    )
                }
            </div>
        </div>
    )
}