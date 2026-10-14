const products = require("../../src/data/products");
const { filterByCategory } = require("../../src/catalog");

describe("filterByCategory", () => {
  test("'all' возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const catalog = products.filter((p) => p.id < 7);
    expect(filterByCategory(catalog, "all").map((p) => p.id)).toEqual([
      1, 2, 3, 4, 5, 6,
    ]);
  });

  test("undefined возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const catalog = products.filter((p) => p.id < 7);
    expect(filterByCategory(catalog, undefined).map((p) => p.id)).toEqual([
      1, 2, 3, 4, 5, 6,
    ]);
  });

  test("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const catalog = products.filter((p) => p.id < 7);
    expect(filterByCategory(catalog, "").map((p) => p.id)).toEqual([
      1, 2, 3, 4, 5, 6,
    ]);
  });

  test("'electronics' возвращает товары с ID [1, 2]", () => {
    const catalog = [...products];
    expect(filterByCategory(catalog, "electronics").map((p) => p.id)).toEqual([
      1, 2,
    ]);
  });

  test("'books' возвращает товары с ID [3, 6]", () => {
    const catalog = [...products];
    expect(filterByCategory(catalog, "books").map((p) => p.id)).toEqual([3, 6]);
  });

  test("'home' возвращает товары с ID [4, 5]", () => {
    const catalog = [...products];
    expect(filterByCategory(catalog, "home").map((p) => p.id)).toEqual([4, 5]);
  });

  test("'clothes' возвращает пустой массив", () => {
    const catalog = [...products];
    expect(filterByCategory(catalog, "clothes")).toHaveLength(0);
  });

  test("'toys' возвращает пустой массив", () => {
    const catalog = [...products];
    expect(filterByCategory(catalog, "toys")).toHaveLength(0);
  });

  test("'sports' возвращает пустой массив", () => {
    const catalog = [...products];
    expect(filterByCategory(catalog, "sports")).toHaveLength(0);
  });
});
