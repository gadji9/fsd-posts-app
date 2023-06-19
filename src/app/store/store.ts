import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { getPersistConfig } from "redux-deep-persist";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistStore,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { favoriteReducer } from "@features/favorite";

const persistConfig = getPersistConfig({
  key: "root",
  version: 1,
  storage,
  whitelist: ["favorite.favorites", "favorite.actualFavorite"],
  rootReducer: combineReducers({
    favorite: favoriteReducer,
  }),
});

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    favorite: favoriteReducer,
  })
);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
