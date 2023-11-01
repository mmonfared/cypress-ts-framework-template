import BasePage from "@pageObjects/basePage";

export default class LoginPage extends BasePage {
  constructor() {
    super("/login.html");
  }
  USERNAME_INPUT = "#user";
  PASSWORD_INPUT = "#password";
  LOGIN_BUTTON = "#login";
  LOGIN_MESSAGE = "#message";

  loginUser(user: string, password: string = "admin") {
    cy.get(this.USERNAME_INPUT).type(user);
    cy.get(this.PASSWORD_INPUT).type(password);
    cy.get(this.LOGIN_BUTTON).click();
  }

  verifyInvalidCredsIsShown(message: string) {
    this.verifyElementHasText(this.LOGIN_MESSAGE, message);
  }
}
