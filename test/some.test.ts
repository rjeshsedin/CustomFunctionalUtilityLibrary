import { some } from "../src/some";

test("some returns true if any element matches", () => {
  const result = some((x) => x > 3, [1, 2, 3, 4]);
  expect(result).toBe(true);
});

test("some returns false if no element matches", () => {
  const result = some((x) => x > 10, [1, 2, 3, 4]);
  expect(result).toBe(false);
});

test("some works with objects", () => {
  const users = [
    { role: "user" },
    { role: "admin" },
  ];

  const result = some((u) => u.role === "admin", users);
  expect(result).toBe(true);
});