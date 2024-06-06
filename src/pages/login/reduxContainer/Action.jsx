// import { loginUser } from "./ActionType"
// const login_user=()=>{
//     return{
//         type:loginUser
//     }
// }

// import { LOGIN_USER, LOGOUT_USER } from "./ActionType";
import { loginUser,logoutUser } from "./ActionType";

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