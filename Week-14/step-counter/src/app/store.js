import { configureStore } from '@reduxjs/toolkit'
import stepCounterReducer from '../reducers/stepCounterReducer'

export default configureStore({
    reducer: {
        stepCounter: stepCounterReducer,
    },
})