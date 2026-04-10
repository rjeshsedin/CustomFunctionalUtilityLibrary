import { lens, view, set } from '../custom-utils/src/lens';

test('lens splits path', () => {
  expect(lens("user.name")).toEqual(["user", "name"]);
});

test('view deep value', () => {
  const obj = {
    user: {
      name: "Rajesh"
    }
  };

  expect(
    view(lens("user.name"), obj)
  ).toBe("Rajesh");
});

test('view returns undefined if missing', () => {
  const obj = {
    user: {}
  };

  expect(
    view(lens("user.age"), obj)
  ).toBeUndefined();
});

test('set shallow value', () => {
  const obj = { name: "Rajesh" };

  const updated = set(
    lens("name"),
    "Vishnu",
    obj
  );

  expect(updated).toEqual({
    name: "Vishnu"
  });
});

test('set deep value', () => {
  const obj = {
    user: {
      name: "Rajesh"
    }
  };

  const updated = set(
    lens("user.name"),
    "Vishnu",
    obj
  );

  expect(updated).toEqual({
    user: {
      name: "Vishnu"
    }
  });
});

test('set creates missing path', () => {
  const obj = {};

  const updated = set(
    lens("user.address.city"),
    "Chennai",
    obj
  );

  expect(updated).toEqual({
    user: {
      address: {
        city: "Chennai"
      }
    }
  });
});

test('set should not mutate original object', () => {
  const obj = {
    user: {
      name: "Rajesh"
    }
  };

  const updated = set(
    lens("user.name"),
    "Vishnu",
    obj
  );

  expect(obj.user.name).toBe("Rajesh");
  expect(updated.user.name).toBe("Vishnu");
});