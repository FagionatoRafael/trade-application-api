import request from "supertest";
import app from "./Trade-dash"


describe("Test the root path", () => {
  test("It should response the GET method", () => {
    return request(app)
      .get("/")
      .expect(200);
  });

  test("It should response the post method", () => {
    return request(app)
      .post("/")
      .expect(200);
  });
});