import * as actionTypes from './actionType';

// file này chứa Key và Data để gửi đi vào reducer xử lí
export const setAuth = (token) => {
    return {
        type: actionTypes.SET_AUTH,
        token,
    };
};
export const removeAuth = () => {
    return {
        type: actionTypes.REMOVE_AUTH,
    };
};

export const setMe = (user) => {
    return {
        type: actionTypes.SET_ME,
        user
    }
}
