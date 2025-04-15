import { configureStore } from "@reduxjs/toolkit";
import historyReducer from "../../features/History/historySlice";


export const store = configureStore({
    reducer: historyReducer
})