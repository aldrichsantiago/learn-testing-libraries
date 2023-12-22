import { isMinor, sum } from "../helpers";


test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('checks if 16 is under 18', () => {
    expect(isMinor({age:16})).toBe(true);
});

test('checks if 29 is under 18', () => {
    expect(isMinor({age:29})).toBe(false);
});

test('checks if 12 is under 18', () => {
    expect(isMinor({age:12})).toBe(true);
});