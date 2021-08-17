export const ADD_CHARACTER = 'ADD_CHARACTER';
export const NEW_CHARACTER = 'NEW_CHARACTER';

export class MyActions {
    static addCharacterById(dispatch, id) {
        dispatch({type: ADD_CHARACTER, id})
    }

    static createCharacter(dispatch, id) {
        dispatch({type: NEW_CHARACTER, id})
    }
}