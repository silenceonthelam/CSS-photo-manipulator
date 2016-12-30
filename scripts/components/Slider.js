import React from "react";

export const Slider = ({
    cssMod="", 
    displayName,
    maxVal,
    minVal,
    name,
    step,
    units,
    updateSlider,
    value
}) => (
    <label className={"ctrl" + cssMod}>
        <span className={"ctrl__label--slider" + cssMod}>
            {displayName}
        </span>
        <input 
            className={"slider" + cssMod}
            max={maxVal}
            min={minVal}
            name={name}
            onChange={ (e) => updateSlider(name, e.target.value) }
            step={step}
            type="range" 
            value={value} />
        <span className={"slider__val" + cssMod}>
            {value}{units}
        </span>
    </label>
);