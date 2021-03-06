import { combineReducers } from 'redux'
import CartReducer from './Cart/CartReducer';
// import CartReducer from './Cart/CartReducer';
import categoryReducer from './Category/categoryReducer';
import customerReducer from './Customer/customerReducer';
import productReducer from './Product/productReducer';
import {addUserReducer,deleteUserReducer,updateUserReducer,loginUserReducer} from './reduxuser/UserReducers'     

const rootReducer = combineReducers({
  
  addU:addUserReducer,
  deleteU:deleteUserReducer,
  updateU:updateUserReducer,
  loginU:loginUserReducer,
  category:categoryReducer,
  product:productReducer,
  cart:CartReducer,
  customer:customerReducer
  
});

export default rootReducer