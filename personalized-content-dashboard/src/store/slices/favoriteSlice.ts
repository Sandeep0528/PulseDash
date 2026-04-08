import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface FavoriteItem {
//     id: string;
//     title: string;
//     type: string;
//     image: string;
// }

interface FavoritesState {
    items: any[];
}

const initialState: FavoritesState = {
    items: []
};

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        toggleFavorite: (state, action: PayloadAction<any>) => {
            const index = state.items.findIndex((item) => item.id === action.payload.id);
            if (index >= 0) {
                state.items.splice(index, 1);
            } else {
                state.items.push(action.payload);
            }
            // localStorage.setItem('favorites', JSON.stringify(state.items));
        },
    },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;