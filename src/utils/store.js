import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";

let initialState = {
		log: "//LOG START://\n"
};

const store = configureStore({
		reducer: reducer, 
		devTools: true, 
		preloadedState: initialState, 
});

export default store;
