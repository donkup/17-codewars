function getDrinkByProfession(param) {
    switch (param.toLowerCase()) {
        case 'jabroni':
            return "Patron Tequila";
        case 'school counselor':
            return 'Anything with Alcohol';
        case 'programmer':
            return 'Hipster Craft Beer';
        case 'bike gang member':
            return 'Moonshine';
        case 'politician':
            return 'Your tax dollars';
        case 'rapper':
            return 'Cristal';
        case 'pundit':
            return 'Beer';
        case 'pug':
            return "Beer";
        default:
            return 'Beer';

    }



}

test('getDrinkByProfession', () => {
    expect(getDrinkByProfession("jabrOni")).toBe("Patron Tequila");
    expect(getDrinkByProfession("scHOOl counselor")).toBe("Anything with Alcohol");
    expect(getDrinkByProfession("prOgramMer")).toBe("Hipster Craft Beer");
    expect(getDrinkByProfession("bike ganG member")).toBe("Moonshine");
    expect(getDrinkByProfession("poLiTiCian")).toBe("Your tax dollars");
    expect(getDrinkByProfession("rapper")).toBe("Cristal");
    expect(getDrinkByProfession("pundit")).toBe("Beer");
    expect(getDrinkByProfession("Pug")).toBe("Beer");

})
// describe("Tests", () => {
//     it("test", () => {
//         Test.assertEquals(getDrinkByProfession("jabrOni"), "Patron Tequila", "'Jabroni' should map to 'Patron Tequila'");
//         Test.assertEquals(getDrinkByProfession("scHOOl counselor"), "Anything with Alcohol", "'School Counselor' should map to 'Anything with alcohol'");
//         Test.assertEquals(getDrinkByProfession("prOgramMer"), "Hipster Craft Beer", "'Programmer' should map to 'Hipster Craft Beer'");
//         Test.assertEquals(getDrinkByProfession("bike ganG member"), "Moonshine", "'Bike Gang Member' should map to 'Moonshine'");
//         Test.assertEquals(getDrinkByProfession("poLiTiCian"), "Your tax dollars", "'Politician' should map to 'Your tax dollars'");
//         Test.assertEquals(getDrinkByProfession("rapper"), "Cristal", "'Rapper' should map to 'Cristal'");
//         Test.assertEquals(getDrinkByProfession("pundit"), "Beer", "'Pundit' should map to 'Beer'");
//         Test.assertEquals(getDrinkByProfession("Pug"), "Beer", "'Pug' should map to 'Beer'");

//     });
// });
