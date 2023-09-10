import { createSlice,PayloadAction } from "@reduxjs/toolkit";

type InitialStateType = {
    isShowMenu: boolean,
    isErrorShow: boolean
}

const initialState: InitialStateType = {
    isShowMenu: false,
    isErrorShow: false
}

const serviceSlice = createSlice({
    name: 'globalSlice',
    initialState,
    reducers: {
showMenu(state, action:PayloadAction<boolean>) {
    state.isShowMenu = action.payload
},
showError(state,action:PayloadAction<boolean>) {
    state.isErrorShow = action.payload
} 
    }
})

export const {
    showMenu,
    showError
} = serviceSlice.actions

export default serviceSlice.reducer