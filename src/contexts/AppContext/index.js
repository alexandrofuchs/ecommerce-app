import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext({
    category: null,
    cart: null,
    loading: false,
    location: null,
    error: null,
    setError: null,
    setLoading: null,
    setCategory: null,
    setShopingCart: null,
    addToCart: null,
    removeToCart: null,
});

export default function AppProvider({ children }) {

    const [loading, setLoading] = useState(false);
    const [category, setCategory] = useState(null);
    const [cart, setCart] = useState([]);

    const addToCart = (productId, quantity, details) => {
        let cart = [];
        if (localStorage.getItem('cart')) {
            cart = JSON.parse(localStorage.getItem('cart'));
            let sameProduct = cart.findIndex((prod) => prod.productId === productId);
            if (sameProduct !== -1) {
                cart[sameProduct].quantity += quantity;
            } else {
                cart.push({ 'productId': productId, 'quantity': quantity, 'details': details });
            }
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        setCart(cart);
    }

    const removeItem = ({ id }) => {

    }

    const removeToCart = (id) => {
        let cart = JSON.parse(localStorage.getItem('cart'));
        let products = cart.filter(({ productId }) => productId !== id);
        localStorage.setItem('cart', JSON.stringify(products));
        setCart(products)
    }

    const [error, setError] = useState("");
    const handleError = (error) => setError(error)
    const clearError = () => setError("");

    useEffect(() => {
        if (!!loading) {
            clearError()
        }
    }, [loading])

    useEffect(() => {
        const loadingCart = async () => {
            const cart = await localStorage.getItem('cart');
            if (cart) {
                setCart(JSON.parse(cart));
            }
        }
        clearError()
        loadingCart();
    }, [])

    return (
        <AppContext.Provider value={{
            addToCart,
            removeToCart,
            cart,
            category,
            setCategory,
            loading,
            error,
            setError: handleError,
            setLoading: (value) => setLoading(value)
        }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useApp = () => {
    const context = useContext(AppContext);
    return context;
}