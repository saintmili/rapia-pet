import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import productsReducer from "./products/products.reducer";
import mediaQueryReducer from "./mediaQuery/mediaQuery.reducer";

export default combineReducers({
    user: userReducer,
    products: productsReducer,
    mediaQuery: mediaQueryReducer
});