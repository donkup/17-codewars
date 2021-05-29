var summation = function (num) {
    let total = 0;
    for (let i = 1; i <= num; i++) {
        total += i;

    }
    return total;
}

test('summation', () => {
    expect(summation(1)).toBe(1);
    expect(summation(8)).toBe(36);

})

/*
1 = 1               1->1
1 + 2 = 3           2->3
1 + 2 + 3 = 6       3->6
1 + 2 + 3 + 4 = 10  4->10
*/