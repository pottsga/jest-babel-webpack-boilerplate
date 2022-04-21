import generateJoke from "./generateJoke";

describe('generateJoke', () => {
    test('it returns the correct thing', () => {
        const actual = generateJoke();
        const expected = "Ha ha ha ..."

        expect(actual).toBe(expected);
    })
})