// Импорт не используется, нужно убрать
import { useContext, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { usePostContext } from "../../contexts/likedPostsContext";

import { usePostById } from "../../hooks/usePostById";
import { Loading } from "../../shared/Loading/Loading";
import { IPost } from "../../shared/types/types";

import "./PostPage.css";

export function PostPage() {
	const params = useParams();
	const { post, isLoading, error } = usePostById(Number(params.id));

	const [likes, setLikes] = useState(0);
	// тоже самое что и с PostCard
	const [likedId, setLikedId] = useState<string>("postLikeButton");

	const { likedPosts, addToLikedPosts, removeFromLikedPosts, isLiked } =
		usePostContext();

	// Идет повторение функционала
	// В таком случае лучше задуматся о создании кастомного компонента ButtonLike
	// В нем будет все связанное с лайком кнопки
	function incrementLikes(post: IPost) {
		if (isLiked(post.id)) {
			if (likedPosts) {
				removeFromLikedPosts(post.id);
			}
			setLikes(likes - 1);
			setLikedId("postLikeButton");
			console.log(likedPosts);
		} else {
			setLikes(likes + 1);
			setLikedId("postLikedButton");
			console.log(likedPosts);
			if (likedPosts) {
				addToLikedPosts(post);
			}
		}
	}

	return (
		// не очень красивые табуляции, делай лучше так
		isLoading === true ? (
			<div id="loadingCont">
				<Loading />
			</div>
		) : !error ? (
			<div id="postPageCont">
                {/* можно убрать, либо указать user'а */}
				<p id="postPageAuthor">{}</p>
				<img id="postPageImg" src={post?.image ?? undefined} alt="" />
				<div id="postLikes">
					<button
						id={likedId}
						onClick={() => {
							post && incrementLikes(post);
						}}
					>
						👍
					</button>
					<p>Лайки: {likes}</p>
				</div>
				<p id="postPageDesc">{post?.text}</p>
			</div>
		) : (
			<p id="error">{error}</p>
		)
	);
}
