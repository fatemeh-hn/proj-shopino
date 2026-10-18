import { create } from 'zustand'
import { Product } from '../utilities/types/productInterface'
import { persist } from 'zustand/middleware'

interface CartStore {
    cart: Product[],
    addToCart: (product: Product) => void,
    removeFromCart: (id: number) => void
}

export const useShoppingCart = create<CartStore>()(
    persist(
        (set) => ({
            cart: [],
            addToCart: (product) =>
                set((state) => {
                    const alreadyExists = state.cart.some(
                        (item) => item?.id === product.id
                    );

                    if (alreadyExists) {
                        return state;
                    }

                    return {
                        cart: [...state.cart, product],
                    };
                }),
            removeFromCart: (id) => set((state) => ({ cart: state.cart.filter((item) => item.id !== id) })),
        }),
        { name: 'cart' },
    ),
)