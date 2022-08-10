import calculate from "./calculate";

describe("calculate", () => {
  it("should return an object", () => {
    const result = calculate({ total: 0, next: null, operation: null }, "AC");
    expect(result).toEqual({ total: 0, next: null, operation: null });
  });
});
