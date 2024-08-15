import supertest from 'supertest';
import { NightwatchTests } from 'nightwatch';

const API_URL = 'https://insurance-api.ornikar.com';

const insuranceAPITest: NightwatchTests = {
  //Tags can be used for organizing tests
  '@tags': ['api'],
  '1. Test API endpoint for vehicles brands': async function (browser: NightwatchTests) {
    const request = supertest(API_URL);

    try {
     
      const response = await request.get('/vehicles/brands');
      browser.assert.strictEqual(response.status, 200, 'Status code is 200');

      const brands = response.body;
      browser.assert.ok(Array.isArray(brands), 'Response data is an array');
      browser.assert.ok(brands.length > 0, 'Response data array is not empty');
      console.log(brands)
      browser.assert.ok(brands.includes('TOYOTA'), 'Toyota is in the list of car brands');
 
    } catch (error) {
      // Log the error if something goes wrong
      console.error('API Request Error:', error);
      throw new Error('API request failed: ${error.message}')
    }
  }
};

export default insuranceAPITest;
