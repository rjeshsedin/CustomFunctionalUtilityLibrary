export function every<T>(
  fn: (value: T, index: number, arr: readonly T[]) => boolean,
  arr: readonly T[]
): boolean {
  let i = 0;

  while (i < arr.length) {
    if (!fn(arr[i]!, i, arr)) {
      return false;
    }
    i++;
  }

  return true;
}