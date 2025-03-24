import { createSlice } from "@reduxjs/toolkit";

const suggestionsSlice = createSlice({
    name: "suggetions",
    initialState: {
        suggestions: {}
    },
    reducers: {
        addSuggestions: (state, action) => {
            const {searchQuery, result} = action.payload;
            state.suggestions[searchQuery] = result;
        },
        getSuggestions: (state, action) => {
            return state.suggestions[action.payload];
        },
        resetSuggestions: (state) => {
            state.suggestions = {};
        }
    }
});

export const {addSuggestions, getSuggestions, resetSuggestions} = suggestionsSlice.actions;
export default suggestionsSlice.reducer;