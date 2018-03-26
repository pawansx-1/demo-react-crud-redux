// contactReducer.js

import * as actionTypes from './actionTypes';

export default (state=[], action) => {
    switch(action.type) {
        case actionTypes.CREATE_NEW_CONTRACT:
            return[
                ...state,
                Object.assign({}, action.contact)
            ];

        case actionTypes.REMOVE_CONTACT:
            return state.filter((data, i) => i !== action.id);
        default:
            return state;
    }
}