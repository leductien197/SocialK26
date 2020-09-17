import * as actionTypes from '../actions/actionType';

const initialAuthState = {
    user: 'hello@cee',
    token: '',
    me: null,
};


// dựa vào Key ở authAction để xử lí data
// ... lấy tất cả State cũ và ghi đè thằng cũ

export default (state = initialAuthState, action) => {
    switch (action.type) {
        
        case actionTypes.SET_AUTH:
            return { ...state, token: action.token };

        case actionTypes.REMOVE_AUTH:
            return initialAuthState

        case actionTypes.SET_ME:
            return {...state, me : action.user}

        default:
            return state;
    }
};