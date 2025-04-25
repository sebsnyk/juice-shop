// Purpose: Using invalid flags or structure with regular expressions.

const r1 = /hello/world; // Adding identifier directly after regex literal (invalid)
const r2 = /pattern/invalidflag; // 'invalidflag' are not valid regex flags
const r3 = new RegExp("pattern", "gg"); // Duplicate 'g' flag is an error

console.log(r1, r2, r3);

function testRegex(str) {
  // Invalid backreference or escape within regex causing structural issues
  return str.match(/(\k<a>) \1/); // Invalid named capture group backreference syntax used incorrectly
}

testRegex("test");
