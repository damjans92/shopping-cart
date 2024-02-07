import { createContext, useContext, useState } from 'react'
import ShoppingCart from '../components/ShoppingCart'
import { useLocalStorage } from '../hooks/useLocalStorage'

type ShoppingCartProvider = {
  children: React.ReactNode
}

type CartItem = {
  id: number
  quantity: number
}

type ShoppingCartContext = {
  openCart: () => void
  closeCart: () => void
  getItemQuantity: (id: number) => number
  increaseQuantity: (id: number) => void
  decreaseQuantity: (id: number) => void
  removeFromCart: (id: number) => void
  cartQuantityTotal: number
  cartItems: CartItem[]
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function useShoppingCart() {
  const context = useContext(ShoppingCartContext)
  if (!context) {
    throw new Error('useShoppingCart must be use within TodoProvider')
  }
  return context
}

export function ShoppingCartProvider({ children }: ShoppingCartProvider) {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    'shopping-cart',
    []
  )
  const [isOpen, setIsOpen] = useState(false)

  const cartQuantityTotal = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  )

  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)

  function getItemQuantity(id: number) {
    const foundItem = cartItems.find((item) => item.id === id)
    return foundItem ? foundItem.quantity : 0
  }

  function increaseQuantity(id: number) {
    setCartItems((currItems) => {
      const hasItem = currItems.find((item) => item.id === id)
      if (!hasItem) {
        return [...currItems, { id, quantity: 1 }]
      } else {
        return currItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
    })
  }

  function decreaseQuantity(id: number) {
    setCartItems((currItems) => {
      const hasItem = currItems.find((item) => item.id === id)
      if (hasItem && hasItem.quantity === 1) {
        return currItems.filter((item) => item.id !== id)
      } else {
        return currItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
      }
    })
  }

  function removeFromCart(id: number) {
    setCartItems((currItems) => currItems.filter((item) => item.id !== id))
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        openCart,
        closeCart,
        cartItems,
        cartQuantityTotal,
      }}
    >
      {children}
      <ShoppingCart isOpen={isOpen} />
    </ShoppingCartContext.Provider>
  )
}
