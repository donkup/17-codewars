function doubleInteger(i) {
    return (i + i);
}

test('doubleInteger', () => {
    expect(doubleInteger(2)).toBe(4);

})

// describe("Tests", () => {
//     it("test", () => {
//         Test.assertEquals(doubleInteger(2), 4);
//     });
// });