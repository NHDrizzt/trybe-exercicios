const { myRemove } = require("./script");

describe('myRemove tests', function () {
    test('remove equal number inside array', () => {
        expect(myRemove([1,2,3,4], 3)).toEqual([1,2,4])
    })
    test('should not return full array', () => {
        expect(myRemove([1,2,3,4], 3)).not.toEqual([1,2,3,4])
    })
    test('should return full array', () => {
        expect(myRemove([1,2,3,4], 5)).toEqual([1,2,3,4])
    })
});