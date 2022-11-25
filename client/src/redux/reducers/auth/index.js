import * as actions from "../../actions";

const initialState = {
    user: null,
    accessToken: null,
    refreshToken: null,
    loading: false,
    error: false,
    success: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.LOGIN_IN_PROGRESS:
            return {
                ...state,
                loading: true,
                error: false,
                success: false,
            };
        case actions.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload.user,
                accessToken: action.payload.accessToken,
                refreshToken: action.payload.refreshToken,
                error: false,
                success: true
            };
        case actions.LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                success: false
            };
        case actions.LOGOUT:
            return {
                ...state,
                user: null,
                accessToken: null,
                refreshToken: null,
                loading: false,
                error: false,
                success: false,
            };
        default:
            return state;
    }
};

export default authReducer;






