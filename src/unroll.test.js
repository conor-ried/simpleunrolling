import unroll from "./unroll";

test("unroll should return the correct result for a square array", () => {
  const square = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
  ];
  const expected = [
    1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10
  ];
  expect(unroll(square)).toEqual(expected);
});

test("unroll should return the correct result for a smaller square array", () => {
  const smallerSquare = [
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"]
  ];
  const expected = ["a", "b", "c", "f", "i", "h", "g", "d", "e"];
  expect(unroll(smallerSquare)).toEqual(expected);
});

// Add any additional tests you deem necessary