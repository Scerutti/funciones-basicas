export const parseNumber = (value, def) => {
    const parsedValue = Number(value);
    if (isNaN(parsedValue)) {
        return def !== undefined ? def : 0;
    }
    else {
        return parsedValue;
    }
};
//# sourceMappingURL=parse-number.js.map