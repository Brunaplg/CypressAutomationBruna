/// <reference types="cypress" />

describe('Test suite for login and purchase', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com');
        // Perform login before each test
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
    });
    after(() => {
        cy.visit('https://www.saucedemo.com');

    })
    it('Should add a products to the cart, verify quantity and Checkout', () => {
        // Ensure we are on the inventory page
        cy.url().should('include', 'inventory.html');
        // Add to cart Sauce Labs Backpack
        cy.get('#add-to-cart-sauce-labs-backpack').should('be.visible').click();
        //Add to cart Tshit (red)
        cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').should('be.visible').click();
        //The cart icon should contain 2 items
        cy.get('.shopping_cart_badge').should('have.text', '2');

        //click on cart to visit cart page
        cy.get('[data-test="shopping-cart-link"]').click();
        // Ensure we are on the cart page
        cy.url().should('include', 'cart.html');

        //The cart should contains the same itens added  Sauce Labs Backpack and Tshit (red)
        cy.get('[data-test="item-4-title-link"]').should('have.text', 'Sauce Labs Backpack');
        cy.get('#item_3_title_link').should('have.text', 'Test.allTheThings() T-Shirt (Red)');

        cy.get('#checkout').click();

    });
    it('Shuld Remove items from cart', () => {
        cy.get('#add-to-cart-sauce-labs-backpack').should('be.visible').click();
        //Add to cart Black t-shirt
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').should('be.visible').click();
        cy.get('[data-test="shopping-cart-link"]').click();

        cy.get('[data-test="remove-sauce-labs-bolt-t-shirt"]').click();
        cy.get('[data-test="remove-sauce-labs-backpack"]').click();
        cy.get('[data-test="continue-shopping"]').click();


    });

});

