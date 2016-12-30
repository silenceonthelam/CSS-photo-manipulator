export const collapseAllPanels = () => ({
    type: "COLLAPSE_ALL_PANELS"
});

export const expandAllPanels = () => ({
    type: "EXPAND_ALL_PANELS"
});

export const togglePanel = (panelId, isCollapsed) => ({
    isCollapsed,
    panelId,
    type: "TOGGLE_PANEL"
});

export const updateCb = (cbId) => ({
    cbId,
    type: "UPDATE_CB"
});

export const updateSlider = (sliderId, value) => ({
    sliderId,
    type: "UPDATE_SLIDER",
    value
});

export const updateIsMobile = (isMobile) => ({
    isMobile,
    type: "UPDATE_IS_MOBILE"
});