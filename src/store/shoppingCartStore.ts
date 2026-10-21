import { create } from "zustand";
import { Product } from "../utilities/types/productInterface";
import { persist } from "zustand/middleware";

export interface CartItem extends Product {
    count: number;
}

interface CartStore {
    cart: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (id: number) => void;
    decreaseCount: (productId: number) => void;
}

export const useShoppingCart = create<CartStore>()(
    persist(
        (set) => ({
            cart: [],

            addToCart: (product) =>
                set((state) => {
                    const exists = state.cart.some(
                        (item) => item.id === product.id
                    );
                    if (exists) {
                        const index = state.cart.findIndex((item) => item.id === product.id);
                        const copyCart= [...state.cart];
                        copyCart[index].count = copyCart[index].count+1
                        return {
                            cart:copyCart,
                        };
                    }

                    return {
                        cart: [...state.cart, { ...product,count:1 }],
                    };
                }),

            removeFromCart: (id) =>
                set((state) => ({
                    cart: state.cart.filter((item) => item.id !== id),
                })),


            decreaseCount: (productId) =>
                set((state) => ({
                    cart: state.cart
                        .map((item) =>
                            item.id === productId
                                ? { ...item, count: item.count - 1 }
                                : item
                        )
                        .filter((item) => item.count > 0),
                })),
        }),
        { name: "cart" }
    )
);
