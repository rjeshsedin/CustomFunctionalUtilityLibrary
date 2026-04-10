import { findByPredicate } from "../src/findByPredicate";

test("find by predicate", () => {
  const users = [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
  ];

  const result = findByPredicate(users, (u) => u.id === 2);

  expect(result).toEqual({ id: 2, name: "B" });
});

test("returns undefined when not found", () => {
  const users = [{ id: 1 }, { id: 2 }];

  const result = findByPredicate(users, (u) => u.id === 99);

  expect(result).toBeUndefined();
});