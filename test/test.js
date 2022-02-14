const test = require("ava");
const { readFile } = require("fs/promises");
const concat = require("../");

test("pconcat", async (t) => {
  await concat(
    ["./test/fixture/a.txt", "./test/fixture/b.txt", "./test/fixture/c.txt"],
    "./test/expected/all.txt"
  );

  const data = await readFile("./test/expected/all.txt", "utf-8");

  t.is(data, "this test should pass");
});
