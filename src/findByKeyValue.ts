export function findByKeyValue<T>(
  arr: readonly T[],
  key: keyof T,
  value: T[keyof T]
): T | undefined {
  let i = 0;

  while (i < arr.length) {
    const item = arr[i];

    if (item !== undefined && (item as any)[key] === value) {
      return item;
    }

    i++;
  }

  return undefined;
}