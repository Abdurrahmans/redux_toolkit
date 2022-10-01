const {createStore} =require("redux");

// definig constants
const ADD_USER = 'ADD_USER';
const RESET = 'RESET';




//State
const InitialConuterState ={
    users:['Abdur'],
    count: 1,
};

//action-object-type, payload
const addUser= (user) =>{
    return{
        type: ADD_USER,
        payload:user,
    };
};

const resetCounterAction = () =>{
    return{
        type: RESET,
    };

};

// create reducer for counter
const userReducer = (state=InitialConuterState, action) =>{
    switch(action.type){

        case ADD_USER:
            return{
                users:[ ... state.users,action.payload],
                count: state.count + 1,
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

const store = createStore(userReducer);

store.subscribe(()=>{
    console.log(store.getState());

})

//dispatch action

store.dispatch(addUser('Rahman'))
store.dispatch(addUser('Saddam'))





