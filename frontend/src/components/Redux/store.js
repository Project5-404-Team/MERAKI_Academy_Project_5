import { configureStore } from "@reduxjs/toolkit"
import usersAuth from "./reducers/usersAuth"
import CompaniesAuth from "./reducers/CompaniesAuth"

export default configureStore({
    reducer: {
        usersAuth: usersAuth,
        CompaniesAuth :CompaniesAuth
    }
})