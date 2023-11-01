export default class BasePage {
  path: string;

  MODAL_POPUP_MESSAGE = ".modal-body";
  MODAL_CLOSE_BUTTON = ".modal-footer > .btn";

  constructor(path: string) {
    this.path = path;
  }

  navigate() {
    cy.visit(this.path);
  }

  getPageTitle() {
    return cy.title();
  }

  verifyTextVisibility(text: string, visible: boolean = true) {
    visible
      ? cy.contains(text).should("be.visible")
      : cy.contains(text).should("not.be.visible");
  }

  verifyElementHasText(locator: string, text: string) {
    cy.get(locator).should("contain.text", text);
  }

  // verifyModalVisibility({ mandatoryParam, param1, param2, param3 }: { mandatoryParam: string; param1?: string; param2?: number; param3?: boolean }) {
  //     visible ? cy.get(this.MODAL_POPUP_MESSAGE).should('be.visible') : cy.get(this.MODAL_POPUP_MESSAGE).should('not.be.visible')
  // }

  verifyModalVisibility(visible: boolean = true, title?: string) {
    visible
      ? cy
          .get(this.MODAL_POPUP_MESSAGE)
          .should("be.visible")
          .and("contain.text", title)
      : cy.get(this.MODAL_POPUP_MESSAGE).should("not.be.visible");
  }

  closeModal(buttonText: string = "Close") {
    cy.get(this.MODAL_CLOSE_BUTTON).contains(buttonText).click();
  }
}
