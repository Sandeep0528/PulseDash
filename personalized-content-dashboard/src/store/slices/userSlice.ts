import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface UserState {
//     categories: string[];
//     searchQuery: string;
//     theme: 'light' | 'dark';
// }

// const initialState: UserState = {
//     categories: ['technology', 'finance'],
//     searchQuery: '',
//     theme: 'light',
// };

const userSlice = createSlice({
    name: 'user',
    initialState: {
        searchQuery: "",
        categories: ['technology']
    },
    reducers: {
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
        },
        // ... other reducers
    },
});

export const { setSearchQuery } = userSlice.actions;
export default userSlice.reducer;