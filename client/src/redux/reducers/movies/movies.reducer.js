import { GET_MOVIE, GET_SPECIFIC_MOVIE } from "./movies.type";

const initialState = {
  movies: [],
  selectedmovies: {},
};

// action = {
//   type: "GET_RESTAURANT",
//   payload: [ ...restaurants ]
//}

const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE:
      return {
        ...state,
        movies: action.payload,
      };
    case GET_SPECIFIC_MOVIE:
      return {
        ...state,
        selectedmovies: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default restaurantReducer;