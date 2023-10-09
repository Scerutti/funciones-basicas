import toString from "../toString";
describe("toString function", () => {
    it("should convert a value to a string", () => {
        expect(toString(42)).toBe("42");
        expect(toString("hello")).toBe("hello");
    });
    it("should return the default value for non-strings", () => {
        expect(toString(undefined, "default")).toBe("default");
        expect(toString(null, "default")).toBe("default");
        expect(toString({}, "default")).toBe("default");
    });
    it("should return an empty string as default if not provided", () => {
        expect(toString(undefined)).toBe("");
        expect(toString(null)).toBe("");
        expect(toString({})).toBe("");
    });
});
//# sourceMappingURL=tostring.test.js.map