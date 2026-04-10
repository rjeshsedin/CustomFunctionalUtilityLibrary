import { filter } from "../src/filter";

describe("filter()", () => {
  test("filters values correctly", () => {
    const arr = [1, 2, 3, 4];

    const result = filter(x => x > 2, arr);

    expect(result).toEqual([3, 4]);
  });

  test("returns empty array if no match", () => {
    const arr = [1, 2];

    const result = filter(x => x > 5, arr);

    expect(result).toEqual([]);

  });

  test("handles empty array", () => {
    expect(filter(x => x > 0, [])).toEqual([]);
  });

  test("does not mutate original array", () => {
    const arr = [1, 2, 3];
    const copy = [...arr];

    filter(x => x > 1, arr);

    expect(arr).toEqual(copy);
  });
});