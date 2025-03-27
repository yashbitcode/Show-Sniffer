import { configureStore } from "@reduxjs/toolkit";
import suggestionsReducer from "./suggestionsSlice";
import bookmarksReducer from "./bookmarksSlice";

const appStore = configureStore({
    reducer: {
        searchSuggestions: suggestionsReducer,
        bookmarks: bookmarksReducer
    }
});

export default appStore;