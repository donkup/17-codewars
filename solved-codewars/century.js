function century(year) {


    return Math.ceil(year / 100);
}



test('century', () => {
    expect(century(1705)).toBe(18);
    expect(century(1900)).toBe(19);
    expect(century(1601)).toBe(17);
    expect(century(2000)).toBe(20);
    expect(century(89)).toBe(1);

})
// describe("Tests", () => {
//     it("test", () => {
//         Test.assertEquals(century(1705), 18, 'Testing for year 1705');
//         Test.assertEquals(century(1900), 19, 'Testing for year 1900');
//         Test.assertEquals(century(1601), 17, 'Testing for year 1601');
//         Test.assertEquals(century(2000), 20, 'Testing for year 2000');
//         Test.assertEquals(century(89), 1, 'Testing for year 89');
//     });
// });