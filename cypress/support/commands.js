// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('backgroundLogin', () => {
    cy.setCookie(
        'PrestaShop-a30a9934ef476d11b6cc3c983616e364',
        'R6xmma6F4U6edNQuu67M0iskhjjJCYcWVHKIbeNGZyeH75ZucaYPbekvzAumo941eq6OdBh5z3E5X%2BJXTJ3rIiauMmi1cOA2hyIe9tSCfv7hMB8dd0auF1%2FDtm6VIGXHmmkrmx%2F4yqw%2Bv9UxCpcc2OpNBMVjc0MJtAl3FfemhO6zP7lOTOtLXqRhivON2TcZVggDiWieEouc7Fe7124XJWQlaLCRoaRz6vhie2EMoEj3aD%2Fs7KYVgkZJemv1OpDjDlBhs7wmTVJTsiFUf%2F8Lni%2FIaz8V2nFUGq0bUVT4jNDgvvO7%2Bl%2FbZkqmJO%2Bl9tNyn5YrgGbG9HEv9Lyf%2B6ahkHurfIFiUpgkycbQP31TDAn8S%2BZP8VcSq%2FJSqZZEhsS1yGjI09Mwvk44ycinf6gNxdzEjkUXVSgXL9tBTD49QZl0vT9%2Fnkj%2BO0M45ZnKOSvPwL39QOTBDZuwA9%2FB7rNq%2FA%3D%3D000339'     
    )
})
