import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { noDupes, noNull } from "../App";

it('does not produce duplicate items', () => {
    expect(noDupes([3,5,5,2,1,7,7,9,8,8].toEqual([3,5,2,1,7,9,8])))
})

it('does not return null or empty vals' () => {
    expect(noNull([3,"", null, 4, null, "", 5].toEqual([3,4,5])))
})
