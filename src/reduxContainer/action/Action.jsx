import { SiderBarOpen, addressData, decreaseQuantity, totalAmount } from "./ActionType";
import { removeItem } from "./ActionType";
import { clearCart } from "./ActionType";
import { increaseQuantity } from "./ActionType";
import { loginUser, logoutUser, addtocart } from "./ActionType";

export const login_user = (token, username) => {
    return {
        type: loginUser,
        payload: {
            token,
            username,
        },
    };
};

export const logout_user = () => {
    return {
        type: logoutUser,
    };
};
export const  add_To_Cart=(item)=>{
    return {
        type:addtocart,
        payload:item,
    };
};
export const increase_Quantity=(id)=>{
    return{
    type:increaseQuantity,
    payload:id,
}}
export const decrease_Quantity=(id)=>{
  return{
    type:decreaseQuantity,
    payload:id,
  }
}
export const clearCartAction = () => {
    return {
        type: clearCart
    };
}
export const removeItemAction = (itemId) => {
    return {
        type: removeItem,
        payload: itemId
    };
};
export const  sideBarOpen=(data)=>{
    return{
        type:SiderBarOpen,
        payload:data
    }
}
export const address_Data=(data)=>{
    return{
        type:addressData,
        payload:data
    }
}
export const total_Amount=(amount)=>{
    // console.log(data);
    return{
        type:totalAmount,
        payload:amount,
    }
}
// export const save_all_addres=(data)=>{
//     return {
//         type:savedAlladdress,
//         payload:data,
//     }
// }