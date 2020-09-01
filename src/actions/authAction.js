import * as actionTypes from './actionType';

// file này chứa Key và Data để gửi đi vào reducer xử lí
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

