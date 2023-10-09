export function toString(value, defaultValue) {
    if (typeof value === 'string') {
        return value;
    }
    if (defaultValue !== undefined && typeof defaultValue === 'string') {
        return defaultValue;
    }
    return '';
}
//# sourceMappingURL=toString.js.map