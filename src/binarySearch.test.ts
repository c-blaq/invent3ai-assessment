import { describe, test, expect } from "bun:test";
import { binarySearch } from "./binarySearch";

describe("binary search", () => {
  const numberArray = [1, 2, 3, 5, 6, 7, 9, 11, 14, 19, 21, 24, 39];
  test("Number exist in array", () => {
    expect(binarySearch(numberArray, 19)).toBe(9);
  });

  test("Number does not exist in array", () => {
    expect(binarySearch(numberArray, 4)).toBe(3);
  });

  const haystack = [1, 3, 5, 7, 9];
  test("Number exist in array", () => {
    expect(binarySearch(haystack, 3)).toBe(1);
  });

  test("Number does not exist in array", () => {
    expect(binarySearch(haystack, -1)).toBe(0);
  });
});
