var concat = require("../");
var fs = require("fs");

exports.testConcat = function (test) {
  test.expect(1);

  concat(
    ["./test/fixture/a.txt", "./test/fixture/b.txt", "./test/fixture/c.txt"],
    "./test/expected/all.txt"
  ).then(function () {
    fs.readFile("./test/expected/all.txt", function (error, all) {
      test.equal(all.toString(), "this test should pass");
      test.done();
    });
  });
};
