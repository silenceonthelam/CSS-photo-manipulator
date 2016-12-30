function parseBgColor(bgColor) {
    const r = bgColor.find(bg => bg.displayName === "R").value,
        g = bgColor.find(bg => bg.displayName === "G").value,
        b = bgColor.find(bg => bg.displayName === "B").value,
        a = bgColor.find(bg => bg.displayName === "A").value;

    return `rgba(${r},${g},${b},${a})`;
}

function parseBlendModes(blendModes) {
    return {
        backgroundColor: parseBgColor( blendModes
                            .filter(b => b.type !== "checkbox") ),
        blendModes: blendModes
            .filter(b => b.type === "checkbox")
            .map(b => ( (b.value < 1) ? "" : b.className + ", " ) )
            .join("")
            .replace(/, $/, "")
    };
}

function parseFilters(filters) {
    return filters
        .map(val => (`${val.className}(${val.value}${val.units})`) )
        .join(" ");
}

function parseTransforms(transforms) {
    return transforms
        .filter(t => t.type !== "label")
        .map(t => {
            return `${t.className}(${t.value}${t.units})`
         })
        .join(" ");
}

export const parseCssVals = (cssVals) => ({
    blendModesStyles: parseBlendModes( 
        cssVals.filter(val => val.panelType === "blendModes") ),
    filtersStyles: parseFilters( 
        cssVals.filter(val => val.panelType === "filters") ),
    transformStyles: parseTransforms( 
        cssVals.filter(val => val.panelType === "transforms") )
});