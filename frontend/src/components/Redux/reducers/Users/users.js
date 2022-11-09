import { createSlice } from "@reduxjs/toolkit";
const usersSlice = createSlice({
  name: "users",
  initialState: {
    allJobs: [],
    favJobs: [],
    appliedJobs: [],
    userDetails :{},
    jobDetails :{},
    companyDetailsInUsersApp:{},
    jobSearch:false
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
      state.favJobs = state.favJobs.filter((elem, index) => {
        return elem.id != action.payload;
      });
    },
    setAppliedJobs: (state, action) => {
        state.appliedJobs = action.payload;
      },
        setJobDetails: (state, action) => {
        state.jobDetails = action.payload;
      },
      setUserDetails: (state, action) => {
        state.userDetails = action.payload;
      },
      setCompanyDetailsInUsersApp :(state,action)=>{
        state.companyDetailsInUsersApp=action.payload
      },
      setJobSearch: (state, action) => {
        state.jobSearch = action.payload;
      },
  },
});

export const { setAllJobs,setFavJobs,addToFavJobs, deleteFavJobs,setAppliedJobs,setUserDetails,setJobDetails,setCompanyDetailsInUsersApp , setJobSearch} = usersSlice.actions;
export default usersSlice.reducer;
