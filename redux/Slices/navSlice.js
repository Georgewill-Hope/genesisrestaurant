import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

// let localStorageData = {};

const initialState = {
  totalCartItems: [],
  cartQuantity: 0,
  cartItemsTotalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    AddProductToCart: (state, action) => {
      const ProductSelected = { ...action.payload };
      const productSelectedIndex = state.totalCartItems.findIndex(
        (product) => product.name === ProductSelected.name
      );

      if (productSelectedIndex >= 0) {
        state.totalCartItems[productSelectedIndex].quantity =
          state.totalCartItems[productSelectedIndex].quantity +
          ProductSelected.quantity;

        state.totalCartItems[productSelectedIndex].totalPrice =
          state.totalCartItems[productSelectedIndex].price *
          state.totalCartItems[productSelectedIndex].quantity;

        toast.success(
          `increased ${action.payload.name} quantity to ${state.totalCartItems[productSelectedIndex].quantity}`
        );
      } else {
        const newProduct = {
          ...action.payload,
          totalPrice: action.payload.price * action.payload.quantity,
        };
        state.totalCartItems.unshift(newProduct);

        toast.success(
          `${newProduct.quantity} ${newProduct.name} added to cart`
        );
      }

      let subtotal = 0;
      state.totalCartItems.forEach(
        (product) => (subtotal = product.totalPrice + subtotal)
      );
      state.cartItemsTotalPrice = subtotal;

      let numberOfCartItems = 0;
      state.totalCartItems.forEach(
        (product) => (numberOfCartItems = product.quantity + numberOfCartItems)
      );
      state.cartQuantity = numberOfCartItems;

      localStorage.setItem("cartItems", JSON.stringify(state));
    },
    DeleteProductFromCart: (state, action) => {
      const newCartItems = state.totalCartItems.filter(
        (product) => product.name !== action.payload
      );
      state.totalCartItems = newCartItems;

      let subtotal = 0;
      state.totalCartItems.forEach(
        (product) => (subtotal = product.totalPrice + subtotal)
      );
      state.cartItemsTotalPrice = subtotal;

      let numberOfCartItems = 0;
      state.totalCartItems.forEach(
        (product) => (numberOfCartItems = product.quantity + numberOfCartItems)
      );
      state.cartQuantity = numberOfCartItems;
      toast.success(`${action.payload} removed from cart`);

      localStorage.setItem("cartItems", JSON.stringify(state));
    },
    ChangeProductQuantity: (state, action) => {
      const selectedProduct = action.payload.name;
      const selectedProductChioceOfAblility = action.payload.ability;
      const productIndex = state.totalCartItems.findIndex(
        (product) => product.name === selectedProduct
      );

      if (productIndex >= 0) {
        if (selectedProductChioceOfAblility === "increase") {
          state.totalCartItems[productIndex].quantity =
            state.totalCartItems[productIndex].quantity + 1;

          state.totalCartItems[productIndex].totalPrice =
            state.totalCartItems[productIndex].price *
            state.totalCartItems[productIndex].quantity;

          let subtotal = 0;

          state.totalCartItems.forEach(
            (product) => (subtotal = product.totalPrice + subtotal)
          );
          state.cartItemsTotalPrice = subtotal;

          let numberOfCartItems = 0;
          state.totalCartItems.forEach(
            (product) =>
              (numberOfCartItems = product.quantity + numberOfCartItems)
          );
          state.cartQuantity = numberOfCartItems;
          toast.success(
            `Increased ${state.totalCartItems[productIndex].name} quantity to ${state.totalCartItems[productIndex].quantity}`
          );
        }
        if (selectedProductChioceOfAblility === "decrease") {
          if (state.totalCartItems[productIndex].quantity === 1) {
            const newCartItems = state.totalCartItems.filter(
              (product) =>
                product.name !== state.totalCartItems[productIndex].name
            );
            state.totalCartItems = newCartItems;

            let total = 0;
            state.totalCartItems.forEach(
              (product) => (total = product.totalPrice + total)
            );
            state.cartItemsTotalPrice = total;

            let numberOfItems = 0;
            state.totalCartItems.forEach(
              (product) => (numberOfItems = product.quantity + numberOfItems)
            );
            state.cartQuantity = numberOfItems;

            toast.success(
              `${state.totalCartItems[productIndex].name} removed from cart`
            );
            localStorage.setItem("cartItems", JSON.stringify(state));

            return;
          }
          if (state.totalCartItems[productIndex].quantity > 1) {
            state.totalCartItems[productIndex].quantity =
              state.totalCartItems[productIndex].quantity - 1;

            state.totalCartItems[productIndex].totalPrice =
              state.totalCartItems[productIndex].price *
              state.totalCartItems[productIndex].quantity;

            let itemTotal = 0;
            state.totalCartItems.forEach(
              (product) => (itemTotal = product.totalPrice + itemTotal)
            );
            state.cartItemsTotalPrice = itemTotal;

            let numberOfCartItems = 0;
            state.totalCartItems.forEach(
              (product) =>
                (numberOfCartItems = product.quantity + numberOfCartItems)
            );
            state.cartQuantity = numberOfCartItems;
            toast.success(
              `Reduced ${state.totalCartItems[productIndex].name} quantity to ${state.totalCartItems[productIndex].quantity}`
            );
            localStorage.setItem("cartItems", JSON.stringify(state));
          }
        }
      }
    },
    GetDataFromLocalStorage: (state, action)=>{
      state.totalCartItems = action.payload.totalCartItems
      state.cartQuantity = action.payload.cartQuantity
      state.cartItemsTotalPrice = action.payload.cartItemsTotalPrice
    }
  },
});

export const {
  AddProductToCart,
  DeleteProductFromCart,
  ChangeProductQuantity,
  GetDataFromLocalStorage,
} = cartSlice.actions;

export default cartSlice.reducer;
