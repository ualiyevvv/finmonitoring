function padWithZeros({value, targetLength, padString}) {
    const paddingLength = targetLength - value.length;
    if (paddingLength <= 0) {
        return value;
    }
    const padding = padString.repeat(paddingLength);
    return value + padding;
}

module.exports = function({value="12a", targetLength=20, padString = '0'}){
    if(typeof value === 'string' || typeof value === 'number'){
        return padWithZeros({value: String(value), targetLength, padString})
    } else {
        throw Error("Conversion error");
    }
}