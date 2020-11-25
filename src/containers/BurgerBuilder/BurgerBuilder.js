import { Component } from 'react';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 2,
      meat: 2,
    },
    totalPrice: 4,
  };

  addIngredientHandler = (type) => {
    this.setState((prevState) => {
      // we uses setState's callback function. because we deponed on the old state
      const updatedIngredients = { ...prevState.ingredients };
      updatedIngredients[type] = updatedIngredients[type] + 1;
      return {
        ingredients: updatedIngredients,
        totalPrice: prevState.totalPrice + INGREDIENT_PRICES[type],
      };
    }, this.updatePurchaseState);
  };

  removeIngredientHandler = (type) => {
    this.setState((prevState) => {
      // we uses setState's callback function. because we deponed on the old state
      const updatedIngredients = { ...prevState.ingredients };
      updatedIngredients[type] = updatedIngredients[type] - 1;
      return {
        ingredients: updatedIngredients,
        totalPrice: prevState.totalPrice - INGREDIENT_PRICES[type],
      };
    }, this.updatePurchaseState);
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients,
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0; // this return true or false
    }
    return (
      <>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemove={this.removeIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
        />
      </>
    );
  }
}

export default BurgerBuilder;
