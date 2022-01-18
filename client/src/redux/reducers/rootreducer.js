import { combineReducers } from "redux";

//reducers
import movies from "./movies/movies.reducer"
import auth from "./auth/auth.reducer"
import user from "./user/user.reducer"


const rootReducer = combineReducers({
    movies,
    auth,
    user
    
})

export default rootReducer