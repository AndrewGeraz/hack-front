import { createSlice,PayloadAction } from "@reduxjs/toolkit";

type InitialStateType = {
    isShowMenu: boolean
}

const initialState: InitialStateType = {
    isShowMenu: false
}

const serviceSlice = createSlice({
    name: 'globalSlice',
    initialState,
    reducers: {
showMenu(state, action:PayloadAction<boolean>) {
    state.isShowMenu = action.payload
} 
    }
})

export const {showMenu} = serviceSlice.actions

export default serviceSlice.reducer