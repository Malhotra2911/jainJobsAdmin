import { combineReducers } from 'redux';
import CommonReducer from './CommonReducer';
import EmployerReducer from './EmployerReducer';
import JobSeekerReducer from './JobSeekerReducer';

export default combineReducers({
    CommonReducer:CommonReducer,
    JobSeekerReducer:JobSeekerReducer,
    EmployerReducer:EmployerReducer
    // MainReducer:MainReducer 

});