import axios from "axios";

describe("Website Index", () => {
  test("Returns 200 Status Code", () => {
    return axios
      .get("/", {
        baseURL: "https://www.google.com",
      })
      .then((response) => {
        return expect(response.status).toBe(200);
      });
  });
});
