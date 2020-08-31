import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

function saveToLocalStorage(state) {
    try {
        const serializeState = JSON.stringify(state)
        localStorage.setItem('state', serializeState)
    } catch(event){
        console.log(event)
    }
}

function loadFromLocalStorage(){
    try {
        const serializeState = localStorage.getItem('state')
        if (serializeState === null) return undefined
        return JSON.parse(serializeState)
    }
    catch(event){
        console.log(event)
        return undefined
    }
}

const persistedState = loadFromLocalStorage()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [thunk]

const store = createStore(
    rootReducer, 
    persistedState,
    composeEnhancers(applyMiddleware(...middleware))
);

store.subscribe(()=> saveToLocalStorage(store.getState()))

export default store;