import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    name: string; // Added name to state to support setUserName
    categories: string[];
    searchQuery: string;
    theme: 'light' | 'dark';
}

const initialState: UserState = {
    name: 'Guest',
    categories: ['technology', 'finance'],
    searchQuery: '',
    theme: 'light',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        toggleCategory: (state, action: PayloadAction<string>) => {
            if (state.categories.includes(action.payload)) {
                state.categories = state.categories.filter(c => c !== action.payload);
            } else {
                state.categories.push(action.payload);
            }
        },
        // ADDED THIS: Now setUserName exists and can be exported
        setUserName: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
        },
        // Added searchQuery reducer if you use it in your app
        setSearchQuery: (state, action: PayloadAction<string>) => {
            state.searchQuery = action.payload;
        }
    },
});

// Now this export will work because both functions exist above!
export const { toggleCategory, setUserName, setSearchQuery } = userSlice.actions;
export default userSlice.reducer;