import { describe, expect } from "@jest/globals";

const request = require("supertest");
const app = require("../src/server/index");

describe("Test the root path", () => {
  test("It should response the GET method", (done) => {
    request(app)
      .post("/projectData")
      .then((response) => {
        expect(response).toBeDefined();
        done();
      });
  });
});
