import React, { createContext, useState } from "react";
import { useItemsFetch } from "../hooks/useItemsFetch";
import { Item } from "../models/Item";

export interface IGlobalContext {
    state: Omit<Item, 'description' | 'sold_quantity'>[],
    loading: boolean,
    search: boolean,
    setSearch: React.Dispatch<React.SetStateAction<boolean>>,
    setSearchQry: React.Dispatch<React.SetStateAction<string>>,
    searchQry: string,
    fetchItems: (T: string | null) => Promise<void>,
    getParameterByName: (name: string, url: string) => string | null
}

export const AppContext = createContext<any>(null);

export const AppContextProvider = ({ children }) => {

    const [searchQry, setSearchQry] = useState('');
    const [search, setSearch] = useState(false);
    const [{ state, loading }, fetchItems] = useItemsFetch();

    const getParameterByName = (name: string, url: string) => {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, '\\$&');
        const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
        const results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

    return (
        <AppContext.Provider value={{
            state,
            loading,
            search,
            setSearch,
            setSearchQry,
            searchQry,
            fetchItems,
            getParameterByName
        }}>
            { children }
        </AppContext.Provider>
    )
};



