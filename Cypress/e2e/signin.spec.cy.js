describe('Sign In Page', () => {
  it('should sign in as admin', () => {
    // Visit the sign-in page
    cy.visit('/');

    // Enter correct username and password
    cy.get('input[type="email"]').type('admin@gmail.com');
    cy.get('input[type="password"]').type('admin');

    // Click the sign-in button
    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/dashboard');

 
  });
  
});
