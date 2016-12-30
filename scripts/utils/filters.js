import {displayNamify,
        humpify}          from "./case-utils";
import {filters as filterDefaults} from "../constants/filters";

export const filters = filterDefaults.map(function(filter) {
    return {
        className: filter.name,
        displayName: displayNamify(filter.name),
        maxValue: filter.maxVal,
        minValue: filter.minVal,
        name: humpify(filter.name) + "Filter",
        panelType: "filters",
        step: filter.step,
        type: "slider",
        units: filter.units, 
        value: filter.val
    };  
});