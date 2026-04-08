import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import favoritesReducer from './slices/favoriteSlice';
import { newsApi } from './services/newsApi';
import { movieApi } from './services/movieApi';

export const store = configureStore({
    reducer: {
        user: userReducer,
        favorites: favoritesReducer,
        [newsApi.reducerPath]: newsApi.reducer,
        [movieApi.reducerPath]: movieApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(newsApi.middleware, movieApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;