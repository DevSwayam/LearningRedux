import {combineReducers} from 'redux'
import reducer from './reducer'

const reducers = combineReducers({
    amount: reducer
});
export default reducers