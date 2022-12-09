import { combineReducers } from "redux";

import userReducer from "./user/user.reducer.jsx";
import productsReducer from "./products/products.reducer.jsx";
import mediaQueryReducer from "./mediaQuery/mediaQuery.reducer.jsx";

export default combineReducers({
  user: userReducer,
  products: productsReducer,
  mediaQuery: mediaQueryReducer,
});

