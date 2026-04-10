export function findByPredicate<T>(
  arr: readonly T[],
  predicate: (value: T, index: number, arr: readonly T[]) => boolean
): T | undefined {
  let i = 0;

  while (i < arr.length) {
    const value = arr[i];

    if (value !== undefined && predicate(value, i, arr)) {
      return value;
    }

    i++;
  }

  return undefined;
}