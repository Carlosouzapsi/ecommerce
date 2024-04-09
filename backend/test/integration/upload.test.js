const request = require("supertest");
const app = require("../../index.js");

describe("upload image tests", () => {
  it("Should upload the image successfully", async () => {
    // TODO
    const response = await request(app).post("/upload");
  });
});
