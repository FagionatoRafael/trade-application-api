import request from "supertest";
import app from "./Users"
import { MongoClient } from "mongodb";
import dotenv, { DotenvParseOutput } from 'dotenv'; 

beforeAll(() => {
  const result = dotenv.config();
  const envs = result.parsed as DotenvParseOutput;

  MongoClient.connect(envs.URL as string);
});

describe("Test the root path", () => {
  test("It should response the GET method", () => {
    return request(app)
      .get("/user")
      .expect(200);
  });

  test("It should response the post method", () => {
    return request(app)
      .post("/user")
      .expect(200);
  });

  test("It should response the patch method with id", () => {
    return request(app)
      .patch("/user/:id")
      .expect(200);
  });

  test("It should response the get method with id", () => {
    return request(app)
      .get("/user/:id")
      .expect(200);
  });
});