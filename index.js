const {createStore} =require("redux");

// definig constants
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';


//State
const InitialConuterState ={
    count: 0,

};

//action-object-type, payload
const incrementCounter = () =>{
    return{
        type: INCREMENT,

    };

};

const decrementCounter = () =>{
    return{
        type: DECREMENT,

    };

};

// create reducer for counter
const counterReducer = (state=InitialConuterState, action) =>{
    switch(action.type){
        case INCREMENT:
            return{
                ... state,
                count: state.count+1,

            };
        case DECREMENT:
            return{
                ... state,
                count: state.count-1,
    
            };
        default:
            state;


    };

};

// create store

const store = createStore(counterReducer);

store.subscribe(()=>{
    console.log(store.getState());

})

//dispatch action

store.dispatch(incrementCounter())
