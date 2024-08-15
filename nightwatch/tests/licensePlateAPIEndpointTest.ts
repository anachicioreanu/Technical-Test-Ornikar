import supertest from "supertest";
import { NightwatchTests } from "nightwatch";

const API_URL = "https://insurance-api.ornikar.com";

const insuranceAPITest: NightwatchTests = {
  //Tags can be used for organizing tests
  "@tags": ["api"],
  "1. Test API endpoint retrieving vehicle details by plate number - invalid license entries":
    async function (browser: NightwatchTests) {
      const request = supertest(API_URL);

      try {
        const response = await request.get(
          "/api/v2/vehicles/license-plate/ABC322",
        );
        browser.assert.strictEqual(
          response.statusCode,
          400,
          "Invalid License Plate",
        );

        const vehicleData = response.body;
        browser.assert.equal(
          vehicleData.message,
          `The plate number 'ABC322' is incorrect.`,
          "Response message should match the expected value",
        );
        browser.assert.equal(
          vehicleData.error,
          "BadRequest",
          "Response message should match the expected value",
        );
      } catch (error) {
        console.error("API Request Error:", error);
        throw new Error("API request failed: ${error.message}");
      }
    },
};

export default insuranceAPITest;
