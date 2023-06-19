import { FunctionComponent, useMemo } from "react";

import { unLikePost, likePost } from "@features/favorite";

import { useAppSelector } from "@app/store/store";

import { Favorite as FavoriteIcon } from "@mui/icons-material";
import { IconButton } from "@mui/material";

import { IPostAction } from "@shared/types/postCard";

export const LikePost: FunctionComponent<IPostAction> = ({ post }) => {
  const favoritePosts = useAppSelector((state) => {
    return state.favorite.favorites[state.favorite.actualFavoriteId].posts;
  });

  const isFavorite = useMemo(() => {
    let result = false;

    favoritePosts.forEach((favPost) => {
      if (favPost.id === post.id) {
        result = true;
      }
    });

    return result;
  }, [favoritePosts, post.id]);

  const onClick = () => {
    if (isFavorite) {
      unLikePost(post.id);
      return;
    }
    likePost(post);
  };

  return (
    <IconButton aria-label="add to favorites" onClick={onClick}>
      <FavoriteIcon color={isFavorite ? "error" : "action"} />
    </IconButton>
  );
};
