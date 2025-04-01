import { createSlice } from "@reduxjs/toolkit";

const bookmarkSlice = createSlice({
    name: "bookmarks",
    initialState: {
        baseBM: {
            '762509': {
              adult: false,
              backdrop_path: '/1w8kutrRucTd3wlYyu5QlUDMiG1.jpg',
              genre_ids: [
                12,
                10751,
                16
              ],
              id: 762509,
              original_language: 'en',
              original_title: 'Mufasa: The Lion King',
              overview: 'Mufasa, a cub lost and alone, meets a sympathetic lion named Taka, the heir to a royal bloodline. The chance meeting sets in motion an expansive journey of a group of misfits searching for their destiny.',
              popularity: 238.3487,
              poster_path: '/lurEK87kukWNaHd0zYnsi3yzJrs.jpg',
              release_date: '2024-12-18',
              title: 'Mufasa: The Lion King',
              video: false,
              vote_average: 7.4,
              vote_count: 1800,
              media_type: 'movie'
            },
            '1229730': {
              adult: false,
              backdrop_path: '/is9bmV6uYXu7LjZGJczxrjJDlv8.jpg',
              genre_ids: [
                28,
                12
              ],
              id: 1229730,
              original_language: 'fr',
              original_title: 'Carjackers',
              overview: 'By day, they\'re invisible—valets, hostesses, and bartenders at a luxury hotel. By night, they\'re the Carjackers, a crew of skilled drivers who track and rob wealthy clients on the road. As they plan their ultimate heist, the hotel director hires a ruthless hitman, to stop them at all costs. With danger closing in, can Nora, Zoe, Steve, and Prestance pull off their biggest score yet?',
              popularity: 398.4515,
              poster_path: '/mtYwRRc7fKt16o0qZJxmBptcdzT.jpg',
              release_date: '2025-03-27',
              title: 'Carjackers',
              video: false,
              vote_average: 6.7,
              vote_count: 17,
              media_type: 'movie'
            }
          },
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