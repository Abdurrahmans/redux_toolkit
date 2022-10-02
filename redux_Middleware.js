const {createStore,applyMiddleware} = require("redux");
const { default: logger } = require("redux-logger");

// products constants
const GET_PRODUTS = 'GET_PRODUTS';
const ADD_PRODUCT = 'ADD_PRODUCT';

//product State
const InitialProductState ={
    products:['mango','banana','orange'],
    numberOfProducts: 3,
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



//product reducer 
const productReducer = (state=InitialProductState, action) =>{
    switch(action.type){

        case GET_PRODUTS:
            return{
                ... state,
    
            };

        case ADD_PRODUCT:
            return{
                products:[ ... state.products,action.payload],
                numberOfProducts: state.numberOfProducts  + 1,
            };

        default:
           return state;

    };

};


// create store

const store = createStore(productReducer,applyMiddleware(logger));

store.subscribe(()=>{
    console.log(store.getState());

})

//dispatch action
store.dispatch(getProducts())
store.dispatch(addProduct('lemon'))









