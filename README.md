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
