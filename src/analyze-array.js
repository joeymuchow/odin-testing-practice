function getAverage(arr) {
    if (!arr.length) return null;
    return arr.reduce((prev, curr) => prev + curr, 0) / arr.length;
}

function getMinMax(arr) {
    let min = null;
    let max = null;

    for (const num of arr) {
        if (!min || num < min) min = num;
        if (!max || num > max) max = num;
    }

    return { min, max }
}

function analyzeArray(arr) {
    const minMax = getMinMax(arr);
    return {
        average: getAverage(arr),
        min: minMax.min,
        max: minMax.max,
        length: arr.length
    }
}

module.exports = analyzeArray;