export function reduceRight<T, U>(
  fn: (acc: U, val: T, index: number, arr: readonly T[]) => U,
  initial: U,
  arr: readonly T[]
): U {
  let acc = initial;

  for (let i = arr.length - 1; i >= 0; i--) {
    acc = fn(acc, arr[i]!, i, arr);
  }

  return acc;
}