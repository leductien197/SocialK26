import * as actionTypes from '../actions/actionType';

const initialAuthState = {
    user: 'hello@cee',
};


// dựa vào Key ở authAction để xử lí data
// ... lấy tất cả State cũ và ghi đè thằng cũ
export default (state = initialAuthState, action) => {
    switch (action.type) {
        case actionTypes.SET_AUTH:
            return { ...state, user: action.detail };
        case actionTypes.REMOVE_AUTH:
            return { ...state, user: '' };

        default:
            return state;
    }
};