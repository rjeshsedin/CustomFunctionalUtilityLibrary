export function reduce<T, U>(
  fn: (acc: U, val: T, index: number, arr: readonly T[]) => U,
  initial: U,
  arr: readonly T[]
): U {
  let acc = initial;

  let i = 0;

  while (i < arr.length) {
    acc = fn(acc, arr[i]!, i, arr);
    i++;
  }

  return acc;
}