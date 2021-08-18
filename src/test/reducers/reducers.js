import characters from '../data/characters.json';
import {ADD_CHARACTER, NEW_CHARACTER} from "./actions/actions";
import {combineReducers} from "redux";

const reducers = (state = characters, action) => {
    switch (action.type) {
        case ADD_CHARACTER:
            return state.filter(i => i.id !== action.id);
        default:
            return state
    }
}

const heroesReducers = (state = [], action) => {
    switch (action.type) {
        case NEW_CHARACTER:
            const find_ch = characters.find(i => i.id === action.id);
            return [...state, find_ch];
        default:
            return state
    }
}


const rootReducers=combineReducers({app:reducers,heroes: heroesReducers})

export {rootReducers}

