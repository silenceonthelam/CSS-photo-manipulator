import React from "react";

export const Checkbox = ({
    cssMod="", 
    displayName, 
    name, 
    updateCheckbox, 
    value
}) => (
    <label className={"ctrl" + cssMod}>
        <span className={"ctrl__label--checkbox" + cssMod}>
            {displayName}
        </span>
        <input 
            checked={value}
            className={"checkbox" + cssMod}
            name={name}
            onChange={(e) => updateCheckbox(name)}
            type="checkbox"
            value={value} />
    </label>
);