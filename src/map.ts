export function map<T, U>(
  fn: (value: T, index: number, arr: readonly T[]) => U,
  arr: readonly T[]
): U[] {
  const result: U[] = [];

  for (let i = 0; i < arr.length; i++) {
    result[i] = fn(arr[i]!, i, arr);
  }

  return result;
}
const output = map(x => x * 2, [1, 2, 3]);
console.log(output);