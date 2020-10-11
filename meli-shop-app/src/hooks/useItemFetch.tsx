import { useState, useEffect, useCallback } from 'react';
import { Item, TUseItemFetch } from '../models/Item';

export const useItemFetch = (itemId: string): TUseItemFetch  => {
    const [state, setState] = useState<Item>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const fetchData = useCallback(async () => {
        setError(false);
        setLoading(true);

        try {
            const endpoint = `http://localhost:4000/api/items/${itemId}`;
            const result = await (await fetch(endpoint)).json();
            setState(result.item)

        } catch (error) {
            setError(true);
        }
        setLoading(false);
    }, [itemId])

    useEffect(() => {
        fetchData();
    }, [fetchData, itemId]);

    return [state, loading, error];
}