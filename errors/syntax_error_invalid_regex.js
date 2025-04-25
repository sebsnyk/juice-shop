// Purpose: Regular expression syntax error
const invalidRegex = new RegExp("(?!)"); // Invalid group quantifier '?!' not allowed here
console.log(invalidRegex.test("abc"));
