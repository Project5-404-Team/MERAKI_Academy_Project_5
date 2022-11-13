import { createSlice } from "@reduxjs/toolkit";
const usersSlice = createSlice({
  name: "users",
  initialState: {
    allJobs: [],
    favJobs: [],
    appliedJobs: [],
    userDetails: JSON.parse(localStorage.getItem("userDetails")) || null,
    jobDetails: {},
    companyDetailsInUsersApp: {},
    jobSearch: false,
    userPicture: "" ,
    userCv: "",
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
    deleteAppliedJobs: (state, action) => {
      state.appliedJobs = state.appliedJobs.filter((elem, index) => {
        return elem.id != action.payload;
      });
    },
    setJobDetails: (state, action) => {
      state.jobDetails = action.payload;
    },
    setUserDetails: (state, action) => {
      state.userDetails = action.payload;
      localStorage.setItem("userDetails", JSON.stringify(state.userDetails));
    },
    setCompanyDetailsInUsersApp: (state, action) => {
      state.companyDetailsInUsersApp = action.payload;
    },
    setJobSearch: (state, action) => {
      state.jobSearch = action.payload;
    },
    setUserPicture: (state, action) => {
      state.userPicture = action.payload;
    },
    setUserCv: (state, action) => {
      state.userCv = action.payload;
    },
  },
});

export const {
  setAllJobs,
  setFavJobs,
  addToFavJobs,
  deleteFavJobs,
  setAppliedJobs,
  setUserDetails,
  setJobDetails,
  setCompanyDetailsInUsersApp,
  setJobSearch,
  deleteAppliedJobs,
  setUserCv,
  setUserPicture,
} = usersSlice.actions;
export default usersSlice.reducer;
