import { createSlice, PayloadAction } from '@reduxjs/toolkit'
<<<<<<< HEAD
import { MenuItems } from '../../pages/Restaurante'
=======
import { MenuItems } from '../../pages/BellaTavola'
>>>>>>> ef65e7dd95d9e76145152e5bc1657510f6f5ea05

type CartState = {
  items: MenuItems[]
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
      state.items.push(action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, open, close } = cartSlice.actions
export default cartSlice.reducer
