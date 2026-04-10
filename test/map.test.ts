// import { map } from "../src/map";

// test("map transforms values", () => {
//   const input = [1, 2, 3];
//   const output = map(x => x * 2, input);

//   expect(output).toEqual([2, 4, 6]);
//   expect(input).toEqual([1, 2, 3]); 
// });
import { map } from "../src/map";


test("map transforms values", () => {
  const input = [1, 2, 3];
  const output = map(x => x * 2, input);

  expect(output).toEqual([2, 4, 6]);
  expect(input).toEqual([1, 2, 3]); 
});


test("map works with empty array", () => {
  const input: number[] = [];
  const output = map(x => x * 2, input);

  expect(output).toEqual([]);
});


test("map works with strings", () => {
  const input = ["a", "b", "c"];
  const output = map(x => x.toUpperCase(), input);

  expect(output).toEqual(["A", "B", "C"]);
});