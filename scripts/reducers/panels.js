import * as action     from "../actions";
import {defaultPanels} from "../constants/panels";

const panelsState = {
    panels: defaultPanels
};

export const panels = (state = panelsState, { isCollapsed, panelId, type }) => {
    switch (type) {
        case "COLLAPSE_ALL_PANELS": 
            return {
                ...state,
                panels: state.panels.map(p => ({
                        ...p,
                        isCollapsed: true
                    }))
            };

        case "EXPAND_ALL_PANELS":
            return {
                ...state,
                panels: state.panels.map(p => ({
                        ...p,
                        isCollapsed: false
                    }))
            };


        case "TOGGLE_PANEL": 
            return {
                ...state,
                panels: state.panels.map(p => {
                        if (p.panelId !== panelId) {
                            if (isCollapsed) {
                                return p;
                            }

                            return {
                                ...p,
                                isCollapsed: !isCollapsed
                            };                      
                        }

                        return {
                            ...p,
                            isCollapsed
                        };
                    })
            };

        default:
            return state;
    }
};