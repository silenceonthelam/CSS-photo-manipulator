import {colorChannels} from "../constants/color-channels";
import {displayNamify,
        humpify}       from "./case-utils";

export const colors = colorChannels.map((colorChannel) => {
    let val = 0,
        maxVal = 255,
        stepVal = 1;

    if (colorChannel === "a") {
        maxVal = 1;
        stepVal = .1;
        val = .5;
    }

    return {
        className: "background-color",
        cssClassModifier: "--group",
        displayName: displayNamify(colorChannel),
        maxValue: maxVal,
        minValue: 0,
        name: `blendModeColor ${colorChannel.toUpperCase()}`,
        panelType: "blendModes",
        step: stepVal,
        type: "slider",
        value: val
    };
});