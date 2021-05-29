const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    if (distanceToPump / fuelLeft > mpg) {
        return false;
    }
    return true;
};


test('doubleInteger', () => {
    expect(zeroFuel(50, 25, 2)).toBe(true);
    expect(zeroFuel(100, 25, 1)).toBe(false);

})

