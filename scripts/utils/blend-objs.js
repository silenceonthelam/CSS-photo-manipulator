import {blendModes}    from "../constants/blend-modes";
import {displayNamify,
        humpify}       from "./case-utils";

export const blendObjs = blendModes.map((blendMode) => {
    return {
        className: blendMode,
        displayName: displayNamify(blendMode),
        isChecked: false,
        name: humpify(blendMode) + "BlendMode",
        panelType: "blendModes",
        type: "checkbox",
        value: false
    };
});