const redux = require('redux');
function counterReducer(state={counter:0}, action){
    let count = 0;
    switch(action.type){
        case "increment":
            count=state.counter+1;
            break;
        case "decrement":
            count=state.counter-1;
            break;
    }
    return {
        counter : count
    }
}

const store = redux.createStore(counterReducer);

function counterSubscriber(){
    const latestState = store.getState();
    console.log(latestState);
}
store.subscribe(counterSubscriber);
store.dispatch({type : "increment"});
