import characters from '../data/characters.json';
import {ADD_CHARACTER} from "./actions/actions";

const reducers = (state = characters, action) => {

    switch (action.type) {
        case ADD_CHARACTER:
            return state.filter(i => i.id !== action.id);
        default:
            return state
    }

}

export default reducers

