import {Checkbox} from "./Checkbox";
import {Label}    from "./Label";
import React      from "react";
import {Slider}   from "./Slider";

function renderCheckbox(cb, updateCheckbox) {
    return (
        <Checkbox
            cssMod={cb.cssClassModifier}
            displayName={cb.displayName}
            name={cb.name}
            updateCheckbox={updateCheckbox}
            value={cb.value} />
    );
}

function renderLabel(label) {
    return (
        <Label
            cssMod={label.cssClassModifier}
            displayName={label.displayName} />
    );
}

function renderSlider(slider, updateSlider) {
    return (
        <Slider
            cssMod={slider.cssClassModifier}
            displayName={slider.displayName}
            maxVal={slider.maxValue}
            minVal={slider.minValue}
            name={slider.name}
            step={slider.step}
            units={slider.units}
            updateSlider={updateSlider}
            value={slider.value} />
    );
}

function renderCtrl(ctrl, updateCb, updateSlider) {
    switch (ctrl.type) {
        case "checkbox":
            return renderCheckbox(ctrl, updateCb);
        case "label":
            return renderLabel(ctrl);
        case "slider":
            return renderSlider(ctrl, updateSlider);
        default:
            return null;
    }
}

export const CtrlWrap = ({ctrl, updateCb, updateSlider}) => renderCtrl(ctrl, updateCb, updateSlider);