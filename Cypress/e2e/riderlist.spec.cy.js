describe('rider List Page', () => {
  beforeEach(() => {
    cy.visit('/riderList') // Visit the hotel list page before each test
  })

 
  it('should navigate to the home page when the Home button is clicked', () => {
    cy.contains('Home').click({ force: true }) // Click on the Home button
    cy.url().should('include', '/dashboard') 
  })

  it('should navigate to the user list page when the Users button is clicked', () => {
    cy.contains('Users').click({ force: true }) // Click on the Users button
    cy.url().should('include', '/userList') })

  it('should navigate to the rider List when the Riders button is clicked', () => {
    cy.contains('Hotels').click({ force: true })
    cy.url().should('include', '/hotelList')
  })

  
  it('should navigate to the admin profile page when the admin profile button is clicked', () => {
    cy.contains('Admin Accounts').click({ force: true }) 
    cy.url().should('include', '/adminProfiles') 
  })

  it('should navigate to the journey list page when the journeys button is clicked', () => {
    cy.contains('Journeys').click({ force: true }) 
    cy.url().should('include', '/journeyList') 
  })
  
  it('should navigate to the payment page when the payments button is clicked', () => {
    cy.contains('Payments').click({ force: true })
    cy.url().should('include', '/payments') 
  })

  it('should navigate to the  comment and reviews page when the comment button is clicked', () => {
    cy.contains('Comments and Reviews').click({ force: true })
    cy.url().should('include', '/comments_and_reviews') 
  })
  
  it('should navigate to the chat page when the Chat button is clicked', () => {
    cy.contains('Chat').click({ force: true })
    cy.url().should('include', '/chat') 
  })

 
  it('should navigate to the home page when the sign out button is clicked', () => {
    cy.contains('Sign Out').click({ force: true }) 
    cy.url().should('include', '/') 
  })

})
