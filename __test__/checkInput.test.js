import { checkingInput } from "../src/client/js/checkInput";

describe("Testing checkingInput function", () => {
  test("It should return true because the function is defined", () => {
    expect(checkingInput(0, 20, 2, 4)).toBeDefined();
  });
  test("It should return true as checkingInput is a function", () => {
    expect(typeof checkingInput).toBe("function");
  });
});
