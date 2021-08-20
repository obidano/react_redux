export const ADD_CHARACTER = 'ADD_CHARACTER';
export const RESTORE_CHARACTER = 'RESTORE_CHARACTER';
export const NEW_CHARACTER = 'NEW_CHARACTER';
export const DELETE_CHARACTER = 'DELETE_CHARACTER';

export class MyActions {
    static assignCharacter(dispatch, id) {
        dispatch({type: ADD_CHARACTER, id})
    }

    static restoreCharacter(dispatch, id) {
        dispatch({type: RESTORE_CHARACTER, id})

    }

    static createCharacter(dispatch, id) {
        dispatch({type: NEW_CHARACTER, id})
    }

    static deleteCharacter(dispatch, id) {
        dispatch({type: DELETE_CHARACTER, id})
        this.restoreCharacter(dispatch, id)
    }
}