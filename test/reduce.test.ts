import { reduce } from "../src/reduce";

test("reduce sums values", () => {
  const result = reduce((acc, val) => acc + val, 0, [1, 2, 3]);
  expect(result).toBe(6);
});