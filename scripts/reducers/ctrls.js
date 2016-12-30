import * as action   from "../actions";
import {ctrlsSchema} from "../utils/make-ctrls-schema";

const ctrlsState = {
    ctrls: ctrlsSchema
};

export const ctrls = (state = ctrlsState, { cbId, sliderId, type, value }) => {
    switch (type) {
        case "UPDATE_CB":
            return {
                ...state,
                ctrls: state.ctrls.map(c => {
                        if (c.name !== cbId) {
                            return c;
                        }

                        return {
                            ...c,
                            value: !c.value
                        }
                    })
            };

        case "UPDATE_SLIDER":
            return {
                ...state,
                ctrls: state.ctrls.map(c => {
                        if (c.name !== sliderId) {
                            return c;
                        }

                        return {
                            ...c,
                            value: value
                        }
                    })
            };            

        default:
            return state;
    }
};