import { createSlice } from "@reduxjs/toolkit";
const adminSlice = createSlice({
  name: "admin",
  initialState: {
   users: [],
    companies: [],
    jobs: [],
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    setCompanies: (state, action) => {
      state.companies = action.payload;
    },
    setJobs: (state, action) => {
      state.jobs=(action.payload);
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter((elem, index) => {
        return elem.id != action.payload;
      });
    },
    deleteJob: (state, action) => {
      state.jobs = state.jobs.filter((elem, index) => {
        return elem.id != action.payload;
      });
    },
    deleteCompany: (state, action) => {
        state.companies = state.companies.filter((elem, index) => {
          return elem.id != action.payload;
        });
      },
  },
});

export const {
    setUsers,
    setCompanies,
    setJobs,
    deleteUser,
    deleteJob,
    deleteCompany
} = adminSlice.actions;
export default adminSlice.reducer;
