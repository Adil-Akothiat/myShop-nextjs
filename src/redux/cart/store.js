import { configureStore, createSlice } from "@reduxjs/toolkit";

const reducersConfig = {
    addItem: (state, action)=> {
        var isExist = false;
        var newItem = action.payload;
        for(let i = 0; i < state.items.length; i++) {
            if(state.items[i].id === newItem.id) {
                state.items[i].quantity++;
                state.count++;
                isExist = true;
                break;
            }
        }
        if(isExist) return;
        state.items.push({...action.payload, quantity: 1});
        state.count++;
    },
    removeItem: (state, action)=> {
        var isExist = false;
        for (let item of state.items) {
            if(item.id === action.payload.id) {
                if(item.quantity > 1) {
                    item.quantity--;
                    state.count--;
                    isExist = true;
                    break;
                }
            }
        }
        if(isExist) return;

        state.items = state.items.filter(item=> item.id !== action.payload.id);
        state.count--;
    }
}

const cartSlice = createSlice({
    name:"cart",
    initialState: {
        items: [],
        count: 0
    },
    reducers: reducersConfig
})

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer
    }
})

export const { addItem, removeItem } = cartSlice.actions;
export default store;