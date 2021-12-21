import {insertCollection, findOneCollection, updateCollection,findByIdCollection } from "./User.controller"

describe("Test the root path", () => {
  test("It should return a insert in a colletion", () => {
    expect(insertCollection).not.toBeUndefined()
  });

  test("It should return a insert in a colletion", () => {
    expect(findOneCollection).not.toBeUndefined()
  });

  test("It should return a insert in a colletion", () => {
    expect(updateCollection).not.toBeUndefined()
  });

  test("It should return a insert in a colletion", () => {
    expect(findByIdCollection).not.toBeUndefined()
  });

});