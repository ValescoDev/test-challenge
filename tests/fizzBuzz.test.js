const fizzBuzz = require("../fizzBuzz");

test("should return Fizz if the number is divisible by 3", () => {
  expect(fizzBuzz(9)).toEqual("Fizz");
});

test("should return Buzz if the number is divisible by 5", () => {
  expect(fizzBuzz(10)).toEqual("Buzz");
});

test("should return FizzBuzz if the number is divisible by both 3 and 5", () => {
  expect(fizzBuzz(15)).toEqual("FizzBuzz");
});

test("should return the number if it is not divisible by either 3 or 5", () => {
  expect(fizzBuzz(7)).toEqual(7);
});
