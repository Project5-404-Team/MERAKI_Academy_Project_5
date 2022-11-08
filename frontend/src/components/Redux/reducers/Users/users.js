import { createSlice } from "@reduxjs/toolkit";
const usersSlice = createSlice({
  name: "users",
  initialState: {
    allJobs: [],
    favJobs: [],
    appliedJobs: [],
    userDetails :{},
    jobDetails :{}
  },
  reducers: {
    setAllJobs: (state, action) => {
      state.allJobs = action.payload;
    },
    setFavJobs: (state, action) => {
      state.favJobs = action.payload;
    },
    addToFavJobs: (state, action) => {
      state.favJobs.push(action.payload);
    },
    deleteFavJobs: (state, action) => {
      state.favJobs = state.fav.filter((elem, index) => {
        return elem.id != action.payload;
      });
    },
    setAppliedJobs: (state, action) => {
        state.allJobs = action.payload;
      },
        setJobDetails: (state, action) => {
        state.allJobs = action.payload;
      },
      setUserDetails: (state, action) => {
        state.allJobs = action.payload;
      },
  },
});

export const { setAllJobs,setFavJobs,addToFavJobs, deleteFavJobs,setAppliedJobs,setUserDetails,setJobDetails } = usersSlice.actions;
export default usersSlice.reducer;
