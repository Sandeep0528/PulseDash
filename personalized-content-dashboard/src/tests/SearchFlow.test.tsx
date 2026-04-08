import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '@/components/dashboard/SearchBar';
import { Provider } from 'react-redux';
import { store } from '@/store/store';

describe('Search Functionality', () => {
    it('updates the input value when typing', () => {
        render(
            <Provider store={store}>
                <SearchBar />
            </Provider>
        );
        const input = screen.getByPlaceholderText(/search/i) as HTMLInputElement;
        fireEvent.change(input, { target: { value: 'Next.js' } });
        expect(input.value).toBe('Next.js');
    });
});