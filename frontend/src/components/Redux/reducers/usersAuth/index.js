import { createSlice } from "@reduxjs/toolkit"
const usersAuthSlice= createSlice({
    name : "usersAuth" ,
    initialState : {token :  localStorage.getItem('token') || null ,
    userId :    localStorage.getItem('userId') || null,
     isLoggedIn  :  localStorage.getItem('token') ? true :false
    },
    reducers: { 
        setLogin : (state,action)=>{
            state.token = action.payload
            state.isLoggedIn =true
     console.log(state.token)
     console.log(state.isLoggedIn)

        },
        setUserId: (state,action)=>{
            state.userId = action.payload
        },
        setLogout: (state,action)=>{
            state.isLoggedIn = false
            state.token =null
            state.userId=null
            localStorage.clear()
        }
    }

})

export const {setLogin , setLogout ,setUserId } = usersAuthSlice.actions
export default usersAuthSlice.reducer