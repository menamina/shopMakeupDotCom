import { it, expect } from "vitest";
import { noDupes } from "../App";

it("does not produce duplicate items", () => {
  expect(noDupes([3, 5, 5, 2, 1, 7, 7, 9, 8, 8])).toEqual([
    3, 5, 2, 1, 7, 9, 8,
  ]);
});
