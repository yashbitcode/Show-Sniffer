import { createSlice } from "@reduxjs/toolkit";

const bookmarkSlice = createSlice({
    name: "bookmarks",
    initialState: {
        baseBM: {},
        peopleBM: {}
    },
    reducers: {
		setBMState: (state, action) => {
			const [baseBM, peopleBM] = action.payload;
			state.baseBM = baseBM;
			state.peopleBM = peopleBM;
		},
        addBaseBM: (state, action) => {
            const {info, docId} = action.payload;
            state.baseBM[info.id] = {info, docId};
        },
        addPeopleBM: (state, action) => {
            const {info, docId} = action.payload;
            state.peopleBM[info.id] = {info, docId};
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

export const {addBaseBM, addPeopleBM, deleteBaseBM, deletePeopleBM, setBMState} = bookmarkSlice.actions;
export default bookmarkSlice.reducer;