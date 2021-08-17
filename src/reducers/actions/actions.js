export const ADD_CHARACTER = 'ADD_CHARACTER';

export class MyActions {
    addCharacterById(id) {
        return {
            type: ADD_CHARACTER,
            id
        }
    }
}