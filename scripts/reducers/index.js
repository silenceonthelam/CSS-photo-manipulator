import {combineReducers} from "redux";
import {ctrls}           from "./ctrls";
import {isMobile}        from "./is-mobile";
import {panels}          from "./panels";

export const photoApp = combineReducers({
    ctrls,
    isMobile,
    panels
});