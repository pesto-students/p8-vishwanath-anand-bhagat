import { configureStore } from '@reduxjs/toolkit'
import switchReducer from '../reducers/switchReducer'

export default configureStore({
    reducer: {
        switch: switchReducer,
    },
})