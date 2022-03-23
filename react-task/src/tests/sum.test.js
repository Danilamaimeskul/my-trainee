const sum = require("../tests_placeholder/sum");

test(`Sum 2 numbers > 0 can't be < 0`, () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(sum(a, b)).not.toBe(0);
    }
  }
});
