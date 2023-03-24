import { CartProduct, UserInfo } from '@/type';
import { createSlice } from '@reduxjs/toolkit'

interface ShoperState {
  productData: CartProduct[],
  userInfo: null | UserInfo
}
const initialState: ShoperState = {
  productData: [],
  userInfo: null,
};

// const initialState = {
//     productData: [],
//     userInfo: null,
//   };

export const shoperSlice = createSlice({
  name: 'shoper',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.productData.find(
        (item: CartProduct) => item._id == action.payload._id
      );
      if (item) {
        item.quantity += action.payload.quantity
      }
      else {
        state.productData.push(action.payload);
      }
    },
    minusQuantity: (state, action) => {
      const item = state.productData.find(
        (item: CartProduct) => item._id == action.payload._id
      );
      if (item?.quantity === 1) {
        item.quantity = 1;
      }
      else {
        item!.quantity--;
      }
    },
    plusQuantity: (state, action) => {
      const item = state.productData.find(
        (item: CartProduct) => item._id == action.payload._id
      );
      if (item) { item.quantity++; }
    },
    deleteItem: (state, action) => {
      state.productData = state.productData.filter((item) => item._id !== action.payload._id);
    },
    resetCart: (state, action) => {
      state.productData = [];
    },
    addUser: (state, action) => {
      state.userInfo = action.payload;
    },
    removeUser: (state) => {
      state.userInfo = null;
    }
  },
})

export const { addToCart, minusQuantity, plusQuantity, deleteItem, resetCart,addUser,removeUser } = shoperSlice.actions

export default shoperSlice.reducer