export function filter<T>(
  fn: (value: T, index: number, arr: T[]) => boolean,
  arr: T[]
): T[] {
  const result: T[] = [];

  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];

    if (value === undefined) continue;

    if (fn(value as T, i, arr)) {
      result.push(value as T);
    }
  }

  return result;
}