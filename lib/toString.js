export default function toString(value, defaultValue) {
    if (value) {
        if (typeof value === 'object' && Object.keys(value).length === 0) {
            if (defaultValue !== undefined && typeof defaultValue === 'string') {
                return defaultValue;
            }
            return '';
        }
        return value.toString();
    }
    if (defaultValue !== undefined && typeof defaultValue === 'string') {
        return defaultValue;
    }
    return '';
}
//# sourceMappingURL=toString.js.map