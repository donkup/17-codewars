function hero(bullets, dragons) {
    const buletsCount = dragons * 2;
    if (buletsCount > bullets) {
        return false

    } else {
        return true;
    }

}
test('hero', () => {
    expect(hero(10, 5)).toBe(true);
    expect(hero(7, 4)).toBe(false);
    expect(hero(4, 5)).toBe(false);
    expect(hero(100, 40)).toBe(true);
    expect(hero(1500, 751)).toBe(false);
    expect(hero(0, 1)).toBe(false);
})
//expect(getPlanetName(2)).toBe('Venus');