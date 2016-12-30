import * as action from "../actions";

const isMobileState = {
    isMobile: false
};

export const isMobile = (state = isMobileState, { isMobile, type }) => {
    switch (type) {
        case "UPDATE_IS_MOBILE": 
            return {
                ...state,
                isMobile
            };

        default:
            return state;
    }
};