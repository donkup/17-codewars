function guessBlue(blueStart, redStart, bluePulled, redPulled) {
    const leftBlue = blueStart - bluePulled;
    const leftRed = redStart - redPulled;
    return leftBlue / (leftBlue + leftRed);
}


test('guessBlue', () => {

    expect(guessBlue(5, 5, 2, 3)).toBe(0.6);
    expect(guessBlue(5, 7, 4, 3)).toBe(0.2);
    expect(guessBlue(12, 18, 4, 6)).toBe(0.4);

})
/*
pradzia 5 melyni ir 5 raudoni
istrauki 2 mel ir 3 raud
liko 3 mel 2 raud
*/

