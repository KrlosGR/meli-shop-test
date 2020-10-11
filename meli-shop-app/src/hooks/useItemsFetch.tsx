import { useState } from 'react';
import { Item, TUseItemsFetch } from '../models/Item';

export const useItemsFetch = (): TUseItemsFetch => {
    const API_REST = 'http://localhost:4000/api/items'
    
    const [state, setState] = useState<Omit<Item, 'description' | 'sold_quantity'>[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const fetchItems = async (query: string | null) => {
        if (!query) return;
        setError(false);
        setLoading(true);
        try {
            const result = await (await fetch(`${API_REST}?q=${query}`)).json();
            setState(result.items);
        } catch (error) {
            setError(true);
            console.log(error);
        }
        setLoading(false);
    };

    return [{ state, loading, error }, fetchItems];
};
