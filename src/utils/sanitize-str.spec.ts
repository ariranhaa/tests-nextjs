import { sanitizeStr } from "./sanitize-str";

describe("sanitizeStr (unit)", () => {
  test("return a empty string when the value is false", () => {
    // @ts-expect-error testing function without params
    expect(sanitizeStr()).toBe("");
  });

  test("return a empty string when the value is not a string", () => {
    // @ts-expect-error testing function with wrong type
    expect(sanitizeStr(123)).toBe("");
  });

  test("return a trimmed string", () => {
    expect(sanitizeStr("  aa  ")).toBe("aa");
  });

  test("checks if the string is normalized with NFC", () => {
    const original = "e\u0301";
    const expected = "é";
    console.log(original);
    expect(expected).toBe(sanitizeStr(original));
  });
});
