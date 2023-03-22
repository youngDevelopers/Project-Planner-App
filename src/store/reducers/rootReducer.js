import authReducer  from './authReducer'
import projectReducer from './projectReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({//combining the two diiferent reducers into a root reducer with auth and project properties
    auth: authReducer,
    project: projectReducer,
})

export default rootReducer;