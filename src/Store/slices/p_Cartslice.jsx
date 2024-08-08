import { createSlice } from "@reduxjs/toolkit";

const P_CartSlice = createSlice({
  name: "buy_prod",
  initialState: {
    prodList: [],
    count: 0,
  },
  reducers: {
    addProdToList(state, action) {
      const new_prod = action.payload;
      if (!state.prodList.find((product) => product.id === new_prod.id)) {
        state.prodList.push({ ...new_prod, count: 1 });
      } else {
        const new_list = state.prodList.map((product) => {
          if (product.id === new_prod.id) {
            return { ...product, count: product.count + 1 };
          } else {
            return product;
          }
        });
        state.prodList = new_prod;
      }
      state.count++;
    },
    removeProdFromList(state, action) {
      const prod_id = action.payload;
      state.prodList = state.prodList.filter(
        (product) => product.id !== prod_id
      );
      state.count--;
    },
    emptyList(state) {
      state.prodList = [];
      state.count = 0;
    },
  },
});

export const { addProdToList, removeProdFromList, emptyList } =
  P_CartSlice.actions;
export default P_CartSlice.reducer;
