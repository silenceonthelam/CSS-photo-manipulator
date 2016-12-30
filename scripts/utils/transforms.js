import {axes}          from "../constants/axes";
import {displayNamify,
        humpify}       from "./case-utils";
import {transforms}    from "../constants/transforms";

export const mergedTransforms = [].concat.apply([], 
    transforms.map((transform) => {
        return [{
            className: transform.name,
            displayName: displayNamify(transform.name),
            maxValue: transform.maxVal,
            minValue: transform.minVal,
            name: humpify(transform.name) + "Transform",
            panelType: "transforms",
            step: transform.step,
            type: "label",
            units: transform.units,
            value: 0
        }].concat(axes.map(function(axis) {
            let val = 0;

            if (transform.name === "scale") {
                val = 1;
            }

            return {
                className: transform.name + axis.toUpperCase(),
                cssClassModifier: "--group",
                displayName: axis.toUpperCase(),
                maxValue: transform.maxVal,
                minValue: transform.minVal,
                name:  humpify(transform.name) + axis.toUpperCase(),
                panelType: "transforms",
                step: transform.step,
                type: "slider",
                units: transform.units,
                value: val
            };
        }));
    })
);