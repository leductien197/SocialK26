import * as actionTypes from './actionType';

export const setAuth = (detail) => {
    return {
        type: actionTypes.SET_AUTH,
        detail,
    };
};
export const removeAuth = () => {
    return {
        type: actionTypes.REMOVE_AUTH,
    };
};

// file này chứa Key và Data