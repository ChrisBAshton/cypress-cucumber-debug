/* global given when then cy expect */

given('I visit the test page', () => {
    cy.visit(`http://localhost:8080/`);
});

then('the body should say {string}', str => {
    cy.contains(str);
});
