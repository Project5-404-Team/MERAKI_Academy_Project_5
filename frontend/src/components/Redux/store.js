import { configureStore } from "@reduxjs/toolkit"
import usersAuth from "./reducers/usersAuth"
import CompaniesAuth from "./reducers/CompaniesAuth"
import fav from "./reducers/fav/fav"
import users from "./reducers/Users/users"
export default configureStore({
    reducer: {
        usersAuth: usersAuth,
        CompaniesAuth :CompaniesAuth,
        fav:fav,
        users:users
    }
})