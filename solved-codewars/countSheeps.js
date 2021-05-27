function countSheeps(arrayOfSheep) {
    let counter = 0;
    for (let i = 0; i < arrayOfSheep.length; i++) {
        if (arrayOfSheep[i] === true) {
            counter++;
        }
    }
    return counter;

}




test('countSheeps', () => {
    var array1 = [true, true, true, false,
        true, true, true, true,
        true, false, true, false,
        true, false, false, true,
        true, true, true, true,
        false, false, true, true];

    expect(countSheeps(array1)).toBe(17);

})


// describe("Tests", () => {
//     it("test", () => {
//         var array1 = [true, true, true, false,
//             true, true, true, true,
//             true, false, true, false,
//             true, false, false, true,
//             true, true, true, true,
//             false, false, true, true];

//         Test.expect(countSheeps(array1) == 17, "There are 17 sheeps in total")
//     });
// });
