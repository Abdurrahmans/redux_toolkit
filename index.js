const {createStore} =require("redux");

// definig constants
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';


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

const resetCounterAction = () =>{
    return{
        type: RESET,
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

        case RESET:
            return{
                ... state,
                count: 0,
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
store.dispatch(incrementCounter())
store.dispatch(decrementCounter())
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(resetCounterAction())
store.dispatch(incrementCounter())


