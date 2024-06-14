import { addtocart, decreaseQuantity, increaseQuantity, loginUser, logoutUser, removeItem, clearCart, SiderBarOpen, addressData, totalAmount } from "./../action/ActionType"

const initialState={
    token: null,
    loggedIn: false,
    user: "",
    cartItems:[],
    isOpenSide:false,
    addresses: [],
    amount:0
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
        // case addtocart:
        //     return {
        //         ...state,
        //         cartItems:[...state.cartItems,action.payload]
        //     };
        case addtocart: {
            const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
            if (itemIndex >= 0) {
                const updatedCartItems = state.cartItems.map((item, index) =>
                    index === itemIndex ? { ...item, quantity: item.quantity + 1 } : item
                );
                return {
                    ...state,
                    cartItems: updatedCartItems,
                };
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, { ...action.payload, quantity: action.payload.quantity || 1 }],
                };
            }
        }
        case increaseQuantity:
            return{
                ...state,
                cartItems:state.cartItems.map(item=>
                    item.id===action.payload?{...item,quantity:item.quantity+1}
                    :item
                )
            }
        case decreaseQuantity:
            return {
                ...state,
                cartItems:state.cartItems.map(item=>
                    item.id===action.payload && item.quantity>1
                    ?{...item,quantity:item.quantity-1}
                    :item
                )
            }
        case removeItem:
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload),
            };
        case clearCart:
            return {
                ...state,
                cartItems: [],
            };
        case SiderBarOpen:
            return{
                ...state,
                isOpenSide: !state.isOpenSide,
            }
        case addressData:
            return{
                ...state,
                addresses:  action.payload
            }
        case totalAmount:
            return{
                ...state,
                amount:action.payload,
            }
        default:
            return state;
    }
};
export default Reducer;