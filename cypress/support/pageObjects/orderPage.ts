import BasePage from "@pageObjects/basePage";
import { Pizza } from "@interfaces";

export default class OrderPage extends BasePage {
  constructor() {
    super("/order_submit.html");
  }

  FLAVOR_SELECT = "#select_flavor";
  QUANTITY_SELECT = "#quantity";
  ADD_TO_CART_BUTTON = "#submit_button";
  ADDED_TO_CARD_MESSAGE = "#added_message";

  orderPizza(pizza: Pizza) {
    cy.get("label").contains(pizza.size).siblings("input").check();
    if (pizza.flavor) {
      cy.get(this.FLAVOR_SELECT).select(pizza.flavor);
    }
    if (pizza.sauce) {
      cy.contains(pizza.sauce).check();
    }
    pizza.toppings.forEach((topping) => {
      cy.get("label").contains(topping).siblings("input").check();
    });
    if (pizza.quantity) {
      cy.get(this.QUANTITY_SELECT).type(pizza.quantity.toString());
    }
    cy.get(this.ADD_TO_CART_BUTTON).click();
  }

  verifyPizzaAdded(text: string = "Pizza added to the cart!") {
    cy.get(this.ADDED_TO_CARD_MESSAGE, { timeout: 6000 }).should("be.visible");
    this.verifyElementHasText(this.ADDED_TO_CARD_MESSAGE, text);
  }
}
