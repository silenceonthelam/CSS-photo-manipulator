import React from "react";

export const Label = ({displayName, cssMod=""}) => (
    <label className={"ctrl--header" + cssMod}>
        <span className={"ctrl__label--header" + cssMod}>
            {displayName}
        </span>
    </label>
);