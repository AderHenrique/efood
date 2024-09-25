import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MenuItems } from '../../pages/Restaurante'

type CartState = {
  items: (MenuItems & { quantity: number })[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<MenuItems>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      )
      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.items.push({ ...action.payload, quantity: 1 })
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload
      )
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1
        } else {
          state.items = state.items.filter((item) => item.id !== action.payload)
        }
      }
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, remove, open, close } = cartSlice.actions
export default cartSlice.reducer
