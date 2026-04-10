import { every } from "../src/every";

test("every returns true if all elements match", () => {
  const result = every((x) => x > 0, [1, 2, 3]);
  expect(result).toBe(true);
});

test("every returns false if any element fails", () => {
  const result = every((x) => x > 0, [1, -2, 3]);
  expect(result).toBe(false);
});

test("every works with objects", () => {
  const users = [
    { active: true },
    { active: true },
  ];

  const result = every((u) => u.active, users);
  expect(result).toBe(true);
});