import { configureStore, } from '@reduxjs/toolkit'
import userReducer from '../../redux/slices/Login/loginSlices'

const store = configureStore({
    reducer: {
        user: userReducer
    }
})

export default store;