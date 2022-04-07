const Theme = require("..");

test("not passing name", () => {
  expect(Theme().name).toBe("Theme");
});

test("passing name", () => {
  expect(Theme({ name: "Test" }).name).toBe("Test");
});
