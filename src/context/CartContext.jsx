import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
    const [buy, setBuy] = useState([]);

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cartItem'));
        if (savedCart && savedCart.length > 0) {
            setCart(savedCart);
        }
    }, []);

    useEffect(() => {
        if (cart.length > 0) {
            localStorage.setItem('cartItem', JSON.stringify(cart));
        } else {
            localStorage.removeItem('cartItem');
        }
    }, [cart]);

    function addToCart(product, quantity) {
        setCart(prev => {
            const existing = prev.find(p => p.id === product.id);
            if (existing) {
                return prev.map(p =>
                    p.id === product.id
                        ? { ...p, quantity: p.quantity + Number(quantity) }
                        : p
                );
            } else {
                return [...prev, { ...product, quantity: Number(quantity) }];
            }
        });
    }

    function updateQuantity(id, quantity) {
        const validQty = quantity < 1 ? 1 : quantity;
        setCart(prev =>
            prev.map(p => (p.id === id ? { ...p, quantity: Number(validQty) } : p))
        );
    }

    function deleteFromCart(id) {
        setCart(prev => prev.filter(p => p.id !== id));
    }

    function buyFromProduct(product, quantity) {
        setBuy([{ ...product, quantity: Number(quantity) }]);
    }

    function buyFromCart() {
        setBuy(cart);
    }

    return (
        <CartContext.Provider value={{ cart, buy, addToCart, updateQuantity, deleteFromCart, buyFromProduct, buyFromCart }}>
            {children}
        </CartContext.Provider>
    );
}