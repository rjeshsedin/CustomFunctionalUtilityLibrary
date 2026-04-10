import { findByKeyValue } from "../src/findByKeyValue";

test("find by key-value pair", () => {
  const users = [
    { id: 1, username: "vishnu_dev" },
    { id: 2, username: "john" },
  ];

  const result = findByKeyValue(users, "username", "vishnu_dev");

  expect(result).toEqual({ id: 1, username: "vishnu_dev" });
});

test("returns undefined when not found", () => {
  const users = [{ id: 1 }, { id: 2 }];

  const result = findByKeyValue(users, "id", 99);

  expect(result).toBeUndefined();
});