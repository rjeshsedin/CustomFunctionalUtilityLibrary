import { pluck } from "../custom-utils/src/pluck.ts";

describe("pluck utility", () => {

  test("pluck single shallow key", () => {
    const data = [
      { id: 1, name: "Rajesh" },
      { id: 2, name: "Vishnu" }
    ];

    expect(pluck("name", data)).toEqual([
      "Rajesh",
      "Vishnu"
    ]);
  });


  test("pluck single deep key", () => {
    const data = [
      { user: { email: "a@test.com" } },
      { user: { email: "b@test.com" } }
    ];

    expect(
      pluck("user.email", data)
    ).toEqual([
      "a@test.com",
      "b@test.com"
    ]);
  });


  test("pluck multiple keys", () => {
    const data = [
      { id: 1, name: "Rajesh" },
      { id: 2, name: "Vishnu" }
    ];

    expect(
      pluck(["id", "name"], data)
    ).toEqual([
      { id: 1, name: "Rajesh" },
      { id: 2, name: "Vishnu" }
    ]);
  });


  test("pluck multiple deep keys", () => {
    const data = [
      { user: { name: "Rajesh", age: 25 } },
      { user: { name: "Vishnu", age: 30 } }
    ];

    expect(
      pluck(["user.name", "user.age"], data)
    ).toEqual([
      {
        "user.name": "Rajesh",
        "user.age": 25
      },
      {
        "user.name": "Vishnu",
        "user.age": 30
      }
    ]);
  });


  test("returns undefined for missing key", () => {
    const data = [
      { id: 1 },
      { id: 2 }
    ];

    expect(
      pluck("name", data)
    ).toEqual([
      undefined,
      undefined
    ]);
  });


  test("empty array returns empty array", () => {
    expect(
      pluck("name", [])
    ).toEqual([]);
  });


  test("mixed nested data", () => {
    const data = [
      { id: 1, info: { email: "a@test.com" }},
      { id: 2, info: {}}
    ];

    expect(
      pluck("info.email", data)
    ).toEqual([
      "a@test.com",
      undefined
    ]);
  });

});