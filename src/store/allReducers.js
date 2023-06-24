import postReducer from "./Reducers/post.reducer";
import modalReducer from "./Reducers/modal.reducer";
import detailsReducer from "./Reducers/details.reducer";
import {combineReducers} from "redux"

const allReducers = combineReducers({
    postReducer,
    modalReducer,
    detailsReducer
});


export default allReducers;

