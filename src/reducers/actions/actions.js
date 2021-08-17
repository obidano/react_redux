


export const ADD_CHARACTER = 'ADD_CHARACTER';
export const NEW_CHARACTER = 'NEW_CHARACTER';

export class MyActions {
    static addCharacterById(id) {
        return {
            type: ADD_CHARACTER,
            id
        }
    }

    static createCharacter(id) {
        return {
            type: NEW_CHARACTER,
            id
        }
    }
}