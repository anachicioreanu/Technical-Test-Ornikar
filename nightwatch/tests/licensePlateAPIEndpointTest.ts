import supertest from "supertest";
import { NightwatchTests, NightwatchAPI } from "nightwatch";

const API_URL = "https://insurance-api.ornikar.com";

// Function to test the API endpoint
async function testVehicleDetailsByPlate(
  browser: NightwatchAPI,
  plateNumber: string,
  expectedStatus: number,
  expectedMessage?: string,
  expectedError?: string,
  expectedBrand?: string,
) {
  const request = supertest(API_URL);

  try {
    const response = await request.get(
      `/api/v2/vehicles/license-plate/${plateNumber}`,
    );
    browser.assert.strictEqual(
      response.statusCode,
      expectedStatus,
      `Expected status code ${expectedStatus} for plate ${plateNumber}`,
    );

    const vehicleData = response.body;
    browser.assert.equal(
      vehicleData.message,
      expectedMessage,
      `Expected message for plate ${plateNumber}`,
    );

    if (expectedError) {
      browser.assert.equal(
        vehicleData.error,
        expectedError,
        `Expected error type ${expectedError} for plate ${plateNumber}`,
      );
    }

    if (expectedBrand) {
      browser.assert.equal(
        vehicleData.specifications.brand,
        expectedBrand,
        `Expected brand ${expectedBrand} for plate ${plateNumber}`,
      );
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error("API Request Error:", error.message);
      throw new Error(`API request failed: ${error.message}`);
    } else {
      console.error("Unexpected error:", error);
      throw new Error("An unexpected error occurred");
    }
  }
}

// Tests
const licensePlateAPITest: NightwatchTests = {
  // Tags used for organizing tests
  "@tags": ["api"],

  "Test 1: Validation of the license plate param": async function (
    browser: NightwatchAPI,
  ) {
    await testVehicleDetailsByPlate(
      browser,
      "ABC322", // plateNumber
      400, // expectedStatus
      "The plate number 'ABC322' is incorrect.", // expectedMessage
      "BadRequest", // expectedError
    );

    await testVehicleDetailsByPlate(
      browser,
      "", // plateNumber (empty)
      404, // expectedStatus
      "Cannot GET /api/v2/vehicles/license-plate/", // expectedMessage
      "Not Found", // expectedError
    );

    await testVehicleDetailsByPlate(
      browser,
      "FY963CW", // plateNumber
      200, // expectedStatus
      undefined, // expectedMessage (can be empty if not needed)
      undefined, // expectedError (not needed here)
      "TOYOTA", // expectedBrand
    );
  },
};

export default licensePlateAPITest;
