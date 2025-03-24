import { configureStore } from "@reduxjs/toolkit";
import suggestionsReducer from "./suggestionsSlice";

const appStore = configureStore({
    reducer: {
        searchSuggestions: suggestionsReducer
    }
});

export default appStore;