function tripleTrouble(one, two, three) {
    let letters = '';
    for (let i = 0; i < one.length; i++) {
        letters += one[i] + two[i] + three[i];
    }
    return letters;
}



test('tripleTrouble', () => {
    expect(tripleTrouble("this", "test", "lock")).toBe("ttlheoiscstk");
    expect(tripleTrouble("aa", "bb", "cc")).toBe("abcabc");
    expect(tripleTrouble("Bm", "aa", "tn")).toBe("Batman");
    expect(tripleTrouble("LLh", "euo", "xtr")).toBe("LexLuthor");

})

