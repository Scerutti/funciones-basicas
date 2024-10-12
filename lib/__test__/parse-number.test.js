import { parseNumber } from "../parse-number";
describe("parseNumber function", () => {
    it("should convert a valid number", () => {
        expect(parseNumber("42")).toBe(42);
    });
    it("should return the default value for an invalid number", () => {
        expect(parseNumber("invalid", 100)).toBe(100);
    });
    it("should return 0 as default value if not provided", () => {
        expect(parseNumber("invalid")).toBe(0);
    });
});
//# sourceMappingURL=parse-number.test.js.map