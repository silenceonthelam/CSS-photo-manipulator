function titleCasify(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function capitalizeChunks(words) {
    return words.reduce((acc, val) => {
        return `${acc}${titleCasify(val)}`;
    }, "");
}

export function displayNamify(word) {
    if (word.indexOf("-") !== -1) {
        return capitalizeChunks( word.split("-") );
    }

    return titleCasify(word);
}

export function humpify(word) {
    if (word.indexOf("-") !== -1) {
        const [start, ...chunks] = word.split("-");
        return start + capitalizeChunks( chunks );    
    }
    
    return word;
}