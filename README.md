This is a learning repo for me. No copyright infringement intended.

/\*\*

- Header
- - Logo
- - Nav bar
-
- Body
- - Search
- - RestaurantContainer
-      - RestaurantCard
-          - Img
-          - Name, Star Rating, Cuisines, Delivery time
-          -
-
- Footer
- - Copyright
- - Links
- - Addres
- - Contact
    \*/

# Redux Toolkit

- Install toolkit using npm i @reduxjs/toolkit
- Install react-redux
- Build our store
- Connect our app to the store
- Slice (cart slice)
- dispatch(action)
- Selector

# Testing

- Unit Testing - testing one component
- Integration Testing - testing a flow
- End-to-End testing- e2e - complete testing

# Testing

- Installed testing library
  npm install -D @testing-library/react @testing-library/dom

- Installed jest

- Installed babel to use Jest
  npm install --save-dev babel-jest @babel/core @babel/preset-env

- Configured babel - created file babel.config.js and added following code -
  module.exports = {
  presets: [["@babel/preset-env", { targets: { node: "current" } }]],
  };

- Configured Parcel config file .parcelrc to override babel config managed by Parcel.

- Jest configuration
  npx jest --init
  it asked for questions an created this file - jest.config.js
  ✔ Would you like to use Typescript for the configuration file? … no
  ✔ Choose the test environment that will be used for testing › jsdom (browser-like)
  ✔ Do you want Jest to add coverage reports? … yes
  ✔ Which provider should be used to instrument code for coverage? › babel
  ✔ Automatically clear mock calls, instances and results before every test? … yes

- Install JSDOM library
  npm install --save-dev jest-environment-jsdom
