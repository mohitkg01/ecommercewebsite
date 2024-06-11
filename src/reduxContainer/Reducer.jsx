import { loginUser,logoutUser } from "./ActionType"

const initialState={
    token: null,
    loggedIn: false,
    user: "",
}
const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case loginUser:
            return {
                ...state,
                token: action.payload.token,
                loggedIn: true,
                user: action.payload.username,
            };
        case logoutUser: 
            return {
                ...state,
                token: null,
                loggedIn: false,
                user: "",
            };
        default:
            return state;
    }
};
export default Reducer;