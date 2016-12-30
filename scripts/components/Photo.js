import {parseCssVals} from "../utils/style-parser";
import React          from "react";  

export const Photo = ({cssVals}) => {
    const {
        blendModesStyles, 
        filtersStyles, 
        transformStyles
    } = parseCssVals(cssVals);
    
    const styles = {
        "WebkitFilter": filtersStyles,
        "transform": transformStyles,
        "backgroundBlendMode": blendModesStyles.blendModes,
        "backgroundColor": blendModesStyles.backgroundColor
    };

    return (
        <figure className="app__stage">
            <div className="app__stage__img" style={styles}></div>
        </figure>
    );
};