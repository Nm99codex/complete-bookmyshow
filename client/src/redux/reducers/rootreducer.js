import { combineReducers } from "redux";

//reducers
import movies from "./movies/movies.reducer"
import auth from "./auth/auth.reducer"

const rootReducer = combineReducers({
    movies,
    
})

export default rootReducer