import { create } from 'zustand'
import { Product } from '../utilities/types/productInterface'

interface CartStore {
    cart: Product[],
    addToCart: (product: Product) => void,
    removeFromCart: (id: number) => void
}

export const useShoppingCart = create<CartStore>((set) => ({
    cart: [],
    addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
    removeFromCart: (id) => set((state) => ({ cart: state.cart.filter((item) => item.id !== id) })),

}))