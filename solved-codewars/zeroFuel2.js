const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    if (mpg * fuelLeft >= distanceToPump) {
        return true;
    }
    return false;
};


test('zeroFuel', () => {
    expect(zeroFuel(50, 25, 2)).toBe(true);
    expect(zeroFuel(100, 50, 1)).toBe(false);

})

// const assert = require("chai").assert;

// describe("zeroFill", function () {
//     it("Sample Tests", function () {
//         assert.equal(zeroFuel(50, 25, 2), true);
//         assert.equal(zeroFuel(100, 50, 1), false);
//     });
// });