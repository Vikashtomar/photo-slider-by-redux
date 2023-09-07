import { configureStore } from "@reduxjs/toolkit";
import slidereducer from "./Slider";
//  const store = configureStore( slideReducer)

const store = configureStore({
    reducer:{
        product: slidereducer,
    }
})
export default store;
