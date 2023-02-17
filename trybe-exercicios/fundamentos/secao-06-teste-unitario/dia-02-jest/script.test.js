const { myRemove, myFizzBuzz } = require("./script");

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

describe('myFizzBuzz tests', () => {
    test('check if num is divisible by 3 and 5', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz')
    })
    test('check if num is divisible by 3', () => {
        expect(myFizzBuzz(3)).toBe('fizz')
    })
    test('check if num is divisible by 5', () => {
        expect(myFizzBuzz(5)).toBe('buzz')
    })
    test('check if num is not divisible by 3 and 5', () => {
        expect(myFizzBuzz(1)).toBe(1)
    })
    test('check if num is not divisible by 3 and 5', () => {
        expect(myFizzBuzz('3')).toBe(false)
    })
})