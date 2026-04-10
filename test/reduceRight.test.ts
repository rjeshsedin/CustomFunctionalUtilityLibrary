import { reduceRight } from "../src/reduceRight";

test("reduceRight order matters", () => {
  const result = reduceRight((acc, val) => acc - val, 100, [10, 5]);
  expect(result).toBe(85);
});