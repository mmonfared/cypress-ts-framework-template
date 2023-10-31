import OrderPage from '@pageObjects/orderPage'
import { Pizza } from '@interfaces'

const order = new OrderPage()
describe('Order Pizza Tests', () => {
    before(() => {
        Cypress.session.clearAllSavedSessions();
        cy.loginWithAPI();
      });

      beforeEach(() => {
        cy.loginWithAPI();
        order.navigate()
      });

    it('Verify Successful Pizza Order', () => {
        let pizza: Pizza = {
            size: 'Small',
            toppings: ['Onions', 'Tomatoes'],
            quantity: 5,
        }
        
        order.orderPizza(pizza)
        order.verifyPizzaAdded()
    })
    
    it('Verify Empty Quantity Field Error', () => {
        let pizza: Pizza = {
            size: 'Small',
            toppings: ['Onions', 'Tomatoes'],
        }
        order.orderPizza(pizza)
        order.verifyModalVisibility(true, "Quantity must be 1 or more!")
        order.closeModal()
        order.verifyModalVisibility(false)
    })
    
      
})
