import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext({
    category: null,
    shoppingCart: [],
    loading: false,
    error: null,   
    setError: null,
    setLoading: null,
    setCategory: null,
    setShopingCart: null,
});

export default function AppProvider({ children }) {

    const [loading, setLoading] = useState(false);
    const [category, setCategory] = useState(null);
    const [shoppingCart, setShopingCart] = useState([]);


    const [error, setError] = useState(null);
    const handleError = (error) => setError(error)
    const clearError = () =>  setError(null);

    useEffect(()=>{
        if(!!loading){
            clearError()
        }
       
    },[loading])

    return (
        <AppContext.Provider value={{ category, shoppingCart, setCategory, setShopingCart, loading, error , setError: handleError, setLoading: (value) => setLoading(value) }}>
            {children}
        </AppContext.Provider>
    )
}

export const useApp = () => {
    const context = useContext(AppContext);
    return context;
}