import {createStore} from 'redux'
import allReducers from '../reducers'
import {composeWithDevTools} from 'redux-devtools-extension'

//in case if you have more reducer we can combine all fo them here
const store = createStore(allReducers,composeWithDevTools())

export default store

