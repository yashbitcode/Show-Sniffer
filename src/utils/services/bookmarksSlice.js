import { createSlice } from "@reduxjs/toolkit";

const bookmarkSlice = createSlice({
    name: "bookmarks",
    initialState: {
        baseBM: {},
        peopleBM: {}
    },
    reducers: {
        addBaseBM: (state, action) => {
            const info = action.payload;
            state.baseBM[info.id] = info;
        },
        addPeopleBM: (state, action) => {
            const info = action.payload;
            state.peopleBM[info.id] = info;
        },
        deleteBaseBM: (state, action) => {
            const id = action.payload;
            delete state.baseBM[id];
        },
        deletePeopleBM: (state, action) => {
            const id = action.payload;
            delete state.peopleBM[id];
        },
    }
});

export const {addBaseBM, addPeopleBM, deleteBaseBM, deletePeopleBM} = bookmarkSlice.actions;
export default bookmarkSlice.reducer;