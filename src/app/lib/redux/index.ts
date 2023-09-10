import { configureStore } from '@reduxjs/toolkit'
import serviceSliceReducer from './serviceSlice'

export function createReduxStore() {
    return configureStore({
        reducer: {
            serviceSlice: serviceSliceReducer
        }
    })   
}

export type AppStore = ReturnType<typeof createReduxStore>
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"]