const {createStore, combineReducers} = require("redux");

// products constants
const GET_PRODUTS = 'GET_PRODUTS';
const ADD_PRODUCT = 'ADD_PRODUCT';

// cart constants
const GET_CART_ITEMS = 'GET_CART_ITEMS';
const ADD_CART_ITEM = 'ADD_CART_ITEM';



//product State
const InitialProductState ={
    products:['mango','banana','orange'],
    numberOfProducts: 3,
};

//cart State
const InitialCartState ={
    cart:['mango'],
    numberOfProducts: 1,
};

//product actions
const getProducts= () =>{
    return{
        type:GET_PRODUTS,
       
    };
};

const addProduct= (product) =>{
    return{
        type: ADD_PRODUCT,
        payload:product,
    };
};

//cart actions
const getCart= () =>{
    return{
        type:GET_CART_ITEMS,
       
    };
};

const addCart= (product) =>{
    return{
        type: ADD_CART_ITEM,
        payload:product,
    };
};



//product reducer 
const productReducer = (state=InitialProductState, action) =>{
    switch(action.type){

        case GET_PRODUTS:
            return{
                ... state,
    
            };

        case ADD_PRODUCT:
            return{
                users:[ ... state.products,action.payload],
                numberOfProducts: state.numberOfProducts  + 1,
            };

        default:
           return state;

    };

};
// cart reducer
const cartReducer = (state=InitialCartState, action) =>{
    switch(action.type){

        case GET_CART_ITEMS:
            return{
                ... state,
    
            };

        case ADD_CART_ITEM:
            return{
                cart:[ ... state.cart, action.payload],
                numberOfProducts: state.numberOfProducts  + 1,
            };

        default:
           return state;

    }

};

const rootReducer = combineReducers({
    productRed : productReducer,
    cartRed : cartReducer,

})

// create store

const store = createStore(rootReducer);

store.subscribe(()=>{
    console.log(store.getState());

})

//dispatch action
store.dispatch(getProducts())
store.dispatch(addProduct('lemon'))

store.dispatch(getCart())
store.dispatch(addCart('banana'))








