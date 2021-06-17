const capitalizeFirstLetters = require("../capitalizeFirstLetters");

test("capitalize take one parameter", () => {
  expect(capitalizeFirstLetters.length).toEqual(1);
});

describe("capitalize all words in sentence", () => {
  test("when the sentence has one word", () => {
    expect(capitalizeFirstLetters("hello")).toEqual("Hello");
  });

  test("when the sentence has several words", () => {
    expect(capitalizeFirstLetters("i am learning TDD")).toEqual(
      "I Am Learning TDD"
    );
  });

  test("when the sentence has no word", () => {
    expect(capitalizeFirstLetters("")).toBeFalsy();
  });
});
