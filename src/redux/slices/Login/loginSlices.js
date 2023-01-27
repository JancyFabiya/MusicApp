import { createAsyncThunk, createSlice, createAction } from '@reduxjs/toolkit'
import axios from "../../../utils/axios";






//----------Login---------



export const loginAction = createAsyncThunk(
    "/auth/login",
    async (phoneNumber, { rejectWithValue, getState, dispatch }) => {
        console.log(' from body phoneNumber', phoneNumber)
        try {
            const config = {
                headers: {
                    "content-type": "application/json",
                    "access-control-allow-origin": '*',
                },

            };
            const { data } = await axios.post(
                "/auth/login",
                phoneNumber,
                config
            );
            console.log(data, 'Db  login')
            if (data && data.user) {
                await localStorage.setItem("user", JSON.stringify(data.user));
            }
            return data
        } catch (error) {
            if (!error?.response) {
                throw error;
            }
            return rejectWithValue(error?.response?.data);
        }
    }
)



//----------Slices-----------------


const loginSlices = createSlice({
    name: "user",
    initialState: {
        userAuth: 'register',
    },
    extraReducers: (builder) => {
        //register
        builder.addCase(loginAction.pending, (state, action) => {
            state.loading = true;
            state.appErr = undefined;
            state.serverError = undefined;
        });
        builder.addCase(loginAction.fulfilled, (state, action) => {
            state.loading = false;
            state.registered = action?.payload;
            state.appErr = undefined;
            state.serverError = undefined;
        });
        builder.addCase(loginAction.rejected, (state, action) => {
            state.loading = false;
            state.appErr = action?.payload?.message;
            state.serverError = action?.error?.message;
        });
    }
})


export default loginSlices.reducer