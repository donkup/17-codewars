function testEven(n) {
    return n % 2 == 0;
}

test('testEven', () => {
    expect(testEven(0)).toBe(true);
    expect(testEven(0.5)).toBe(false);
    expect(testEven(1)).toBe(false);
    expect(testEven(2)).toBe(true);
    expect(testEven(-4)).toBe(true);

})

