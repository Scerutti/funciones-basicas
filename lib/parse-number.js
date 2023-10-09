const parseNumber = (value, def) => {
    const parsedValue = Number(value);
    if (isNaN(parsedValue)) {
        return def !== undefined ? def : 0;
    }
    else {
        return parsedValue;
    }
};
export default parseNumber;
//# sourceMappingURL=parse-number.js.map