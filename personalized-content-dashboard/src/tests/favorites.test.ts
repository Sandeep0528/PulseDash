import favoritesReducer, { addFavorite } from '../store/slices/favoritesSlice';

describe('Favorites Reducer', () => {
    it('should handle adding an item to favorites', () => {
        const initialState = { items: [] };
        const newItem = { id: '1', title: 'Test Article' };
        const state = favoritesReducer(initialState, addFavorite(newItem));
        expect(state.items).toHaveLength(1);
        expect(state.items[0].title).toBe('Test Article');
    });
});