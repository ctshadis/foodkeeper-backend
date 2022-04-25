const CookingMethods = require("../data/cookingMethod.js"); 

module.exports = {
  method: 'get',
  path: '/cookingMethods', 
  async handler(response) {
    let cookingMethods;
    cookingMethods = await CookingMethod.getCookingMethods(); 
    response.status(200).json(cookingMethods);
  }
};

