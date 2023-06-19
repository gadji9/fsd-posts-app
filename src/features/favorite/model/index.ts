import { store } from "@app/store/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IFavorite, IPost } from "@shared/types/global";

export interface IFavoriteState {
  actualFavoriteId: number;
  favorites: IFavorite[];
}

const initialFavorites = [{ id: 0, posts: [] }];

const initialState: IFavoriteState = {
  favorites: initialFavorites,
  actualFavoriteId: 0,
};

const favoriteSlice = createSlice({
  initialState,
  name: "favoriteState",
  reducers: {
    addFavoriteReducer: (state) => {
      const curFav = state.favorites.at(-1);
      if (curFav) {
        state.favorites.push({ id: curFav.id + 1, posts: [] });
      }
    },
    setActualFavoriteReducer: (state, action: PayloadAction<IFavorite>) => {
      state.actualFavoriteId = action.payload.id;
    },
    addPostToFavoriteReducer: (state, action: PayloadAction<IPost>) => {
      state.favorites[state.actualFavoriteId].posts.push(action.payload);
    },
    removePostFromFavoriteReducer: (
      { favorites, actualFavoriteId },
      action: PayloadAction<number>
    ) => {
      favorites[actualFavoriteId].posts = favorites[
        actualFavoriteId
      ].posts.filter((post) => post.id !== action.payload);
    },
  },
});

const {
  addFavoriteReducer,
  setActualFavoriteReducer,
  addPostToFavoriteReducer,
  removePostFromFavoriteReducer,
} = favoriteSlice.actions;

export const favoriteReducer = favoriteSlice.reducer;

export const addFavorite = () => {
  store.dispatch(addFavoriteReducer());
};

export const setActualFavorite = (favorite: IFavorite) => {
  store.dispatch(setActualFavoriteReducer(favorite));
};

export const likePost = (post: IPost) => {
  store.dispatch(addPostToFavoriteReducer(post));
};

export const unLikePost = (id: number) => {
  store.dispatch(removePostFromFavoriteReducer(id));
};
