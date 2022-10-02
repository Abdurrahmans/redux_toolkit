//constants

const { default: axios } = require("axios");
const { createStore,applyMiddleware } = require("redux");
const thunk = require('redux-thunk').default;

const GET_TODOS_REQUEST = 'GET_TODOS_REQUEST';
const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS';
const GET_TODOS_FAILED = 'GET_TODOS_FAILED';
const API_URL ="https://jsonplaceholder.typicode.com/todos";

//states
const InitialTodosState = {
    todo:[],
    isLodding: false,
    error:null,

};
//actions

const getDodosFailed =(error)=>{
    return{

        type:GET_TODOS_FAILED,
        payload:error

    };
};


const getDodosSuccess =(todos)=>{
    return{

        type:GET_TODOS_SUCCESS,
        payload:todos

    };
};

const getDodosRequest =()=>{
    return{

        type:GET_TODOS_REQUEST,

    };
};


//reducers

const todosReducer = (state=InitialTodosState, action) =>{
    switch(action.type){

        case GET_TODOS_REQUEST:
            return{
                ... state,
                isLodding:true,
    
        };

        case GET_TODOS_SUCCESS:
            return{
                ... state,
                isLodding:false,
                todos:action.payload

            };

        case GET_TODOS_FAILED:
        return{
            ... state,
            isLodding:false,
            error:action.payload

        };

        default:
           return state;

    };

};

//async action creator
const fetchData =()=>{
    return (dispatch)=>{
        dispatch(getDodosRequest());
        axios.get(API_URL)
        .then(res=>{
            const todos = res.data;
            const titles = todos.map((todo)=> todo.title);
            dispatch(getDodosSuccess(titles))
          
        })
        .catch(error=>{
            const errorMessage = error.message;
            dispatch(getDodosFailed(errorMessage));
          
        });

    };


};

//store

const store = createStore(todosReducer,applyMiddleware(thunk));

store.subscribe(()=>{
    console.log(store.getState());

})

//dispatch action
store.dispatch(fetchData())

