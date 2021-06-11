import { combineReducers, Reducer } from 'redux'
import { connectRouter } from 'connected-react-router'
import { History } from 'history'
import counterReducer from '../features/counter/counterSlice'
import userReducer from '../features/user/userSlice'


export interface Reducers {
    [s: string]: Reducer
}

export type RootState = ReturnType<typeof createRootReducer>

const createRootReducer = (history: History) => combineReducers({
    router: connectRouter(history),
    counter: counterReducer,
    user: userReducer,
})





export default createRootReducer


