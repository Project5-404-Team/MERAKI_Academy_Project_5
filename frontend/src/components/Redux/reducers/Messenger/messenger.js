import { createSlice } from "@reduxjs/toolkit"
const messengerSlice= createSlice({
    name : "messenger" ,
    initialState :
     {message :  "" ,
        room : 1,
        userName  :"",
        messageList : [],
        socketId :null
    },
    reducers: { 
        setMessage : (state,action)=>{
            state.message = action.payload
        },
        setRoom: (state,action)=>{
            state.room = action.payload
           
        },
        setUserName: (state,action)=>{
            state.userName = action.payload
        },
        setMessageList: (state,action)=>{
            state.messageList= action.payload
        },
        setsocketId: (state,action)=>{
            state.socketId= action.payload
        }
    }


})

export const {setUserName , setRoom ,setMessage, setMessageList,setsocketId} = messengerSlice.actions
export default messengerSlice.reducer