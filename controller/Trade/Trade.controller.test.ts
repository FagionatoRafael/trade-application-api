import {getRealTimeValues} from './Trade.controller'

describe("Test the root path", () => {
  test("It should return a real time data", () => {
    expect(getRealTimeValues).not.toBeUndefined()
  });

});