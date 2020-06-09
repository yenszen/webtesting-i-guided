const { add } = require("./calculator.js");

// AAA：
// Arrange
// Act
// Assert

describe("calculator functions", () => {
  describe("test add()", () => {
    // Arrange
    let a = 2;
    let b = 2;
    let expected = 4;
    let result = -1;

    it("returns the sum of 2 numbers", () => {
      // Act
      result = add(a, b);
      // Assert
      expect(result).toBe(expected);

      a = 2;
      b = 3;
      expected = 5;
      result = add(a, b);
      expect(result).toBe(expected);
    });

    it("returns 0 with no arguments", () => {
      expect(add()).toBe(0);
    });

    it("returns the value passed when only one argument is provided", () => {
      a = null;
      b = 3;
      expected = 3;
      result = add(b);
      expect(result).toBe(expected);
    });

    it("returns the sum of multiple numbers", () => {
      expect(add(1, 2, 3)).toBe(6);
      expect(add(1, 2, 3, 5)).toBe(11);
    });

    it("returns the sum of an array of numbers", () => {
      expect(add([1, 2, 3])).toBe(6);
      expect(add([1, 2, 3, 5])).toBe(11);
    });
  });
});
