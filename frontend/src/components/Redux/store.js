import { configureStore } from "@reduxjs/toolkit"
import usersAuth from "./reducers/usersAuth"
import CompaniesAuth from "./reducers/CompaniesAuth"
import fav from "./reducers/fav/fav"

export default configureStore({
    reducer: {
        usersAuth: usersAuth,
        CompaniesAuth :CompaniesAuth,
        fav:fav
    }
})