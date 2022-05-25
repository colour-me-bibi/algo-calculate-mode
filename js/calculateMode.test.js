const cm = require("./calculateMode.js");
const shallowEqualArray = require("shallow-equal/arrays");


test("should calculate the mode of an array", () => {
  expect(shallowEqualArray(cm.calculateMode([1,2,3,3]), [3])).toBe(true);
  expect(shallowEqualArray(cm.calculateMode([4.5, 0, 0]), [0])).toBe(true);
  expect(shallowEqualArray(cm.calculateMode([1.5, -1, 1, 1.5]), [1.5])).toBe(true);
  expect(shallowEqualArray(cm.calculateMode([1,1,2,2]), [1,2])).toBe(true);
  expect(shallowEqualArray(cm.calculateMode([1,2,3]), [1,2,3])).toBe(true);
  expect(shallowEqualArray(cm.calculateMode(["who", "what", "where", "who"]), ["who"])).toBe(true);
});
