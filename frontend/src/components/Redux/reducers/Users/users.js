import { createSlice } from "@reduxjs/toolkit";
const usersSlice = createSlice({
  name: "users",
  initialState: {
    allJobs: [],
    favJobs: [],
    appliedJobs: [],
    userDetails :{}
  },
  reducers: {
    setAllJobs: (state, action) => {
      state.allJobs = action.payload;
    },
    setFavJobs: (state, action) => {
      state.fav = action.payload;
    },
    addToFav: (state, action) => {
      state.fav.push(action.payload);
    },
    deleteFav: (state, action) => {
      state.fav = state.fav.filter((elem, index) => {
        return elem.id != action.payload;
      });
    },
    setAppliedJobs: (state, action) => {
        state.allJobs = action.payload;
      },
      setUserDetails: (state, action) => {
        state.allJobs = action.payload;
      },
  },
});

export const { setAllJobs,setFavJobs, addToFav, deleteFav,setAppliedJobs,setUserDetails } = usersSlice.actions;
export default usersSlice.reducer;
