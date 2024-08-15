# Test Assessment Ornikar

## Overview

This project uses Nightwatch.js and TypeScript to perform automated browser and API testing.

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/en/download/) (version used: v20.11.0)
- [npm](https://www.npmjs.com/get-npm) (version used: 10.2.4)

## Getting Started

Follow these steps to set up and run the project:

## 1. Clone the Repository

Clone the repository using the following command:


`git clone <repository-url>`


## 2. Install Dependencies

Install the project dependencies using npm:

`npm install`

## 3. Configuration Files

`nightwatch.conf.ts`: Configuration for Nightwatch.js
`tsconfig.json`: TypeScript configuration file

You may need to adjust the settings according to your test environment, such as browser drivers, test environments, and more.

## 4. Run Tests

To run the tests, use the following npm scripts:
#
Running the tests in chrome browser

`npm test`
#
Running the tests in headless chrome browser

`npm run test:headless`

## Scripts available
Checking the quality of the code

`npm run lint`
#
Checking for formatting errors:

`npm run prettier`
#
Fixing formatting in all files:

`npm run prettier:fix`


## Test Result Reports
Test report files are automatically generated in the `tests_output` folder, which will be created when running the tests.

Screenshots can be found in the `screens` folder.