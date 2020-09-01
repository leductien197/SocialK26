// reducers/index.js

import { combineReducers } from 'redux'
import auth from './authReducer'
import post from "./postReducer"


// gom các reducers lại với combineReducers, mỗi reducers chia ra để xử lí các action riêng
const rootReducer = combineReducers({
    auth,
    post,
})

export default rootReducer