import { credentials } from "@fixtures/creds";
import LoginPage from "@pageObjects/loginPage";

const login = new LoginPage();

describe("Login Tests", () => {
  it("Verify Valid Login", () => {
    login.navigate();
    login.loginUser(credentials.valid.userName, credentials.passwordGeneral);
    login.verifyTextVisibility("Dinesh's Pizza House");
  });

  it("Verify Invalid Login", () => {
    login.navigate();
    login.loginUser(credentials.invalid.userName, credentials.passwordGeneral);
    login.verifyInvalidCredsIsShown("Incorrect username or password.");
  });
});
