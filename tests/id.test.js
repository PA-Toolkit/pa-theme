const Theme = require("..");

test("not passing ID", () => {
  expect(Theme().id).not.toBeUndefined();
});

test("passing valid string ID", () => {
  expect(Theme({ id: "123456" }).id).toBe("123456");
});

test("passing invalid string ID", () => {
  expect(() => Theme({ id: "12345" })).not.toBe("12345");
});

test("passing valid number ID", () => {
  expect(Theme({ id: 123456 }).id).toBe("123456");
});

test("passing invalid number ID", () => {
  expect(() => Theme({ id: 999999 })).not.toBe("999999");
});
