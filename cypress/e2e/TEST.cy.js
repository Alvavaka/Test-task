  describe('My First Test', () => {
    it('Gets, types and asserts', () => {
      // Visiting the page
      cy.visit('http://useinsider.com/')
      // Checking that the exact page is opened
      cy.url().should('include', 'useinsider.com')
      // Accepting cookies
      cy.contains('Accept All').click()
      // Clicking on navigation bar
      cy.get('.navbar-toggler').click()
      // Opening Company dropdown
      cy.contains('Company').click()
      // Opening Careers page
      cy.contains('Careers').click()
      // Checking that Careers page is opened
      cy.url().should('include', '/careers/')
      // Checking Teams 
      cy.get('.category-title-media').should('contain', 'Find your calling')
      // Checking Life at Insider
      cy.get('.elementor-heading-title').should('contain', 'Life at Insider')
      // Clicking on See All Teams
      cy.get('.btn-outline-secondary').click()
      // Checking that Quality Assurance item exists on the page and click on it
      cy.contains('Quality Assurance').click()
      // Clicking on See all QA jobs
      cy.contains('See all QA jobs,').click()
      // Click on Filter by Location list
      cy.contains('All').click()
      // Confirming that 28 items inside the dropdown list
      cy.get('.select2-dropdown >li').should('have.length',28)
      // Clicking Istanbul, Turkey region
      cy.contains('Istanbul, Turkey').click()
      // Click on Filter by Department list
      cy.contains('Quality Assurance').click()
      // Check open QA positions
      cy.get('.position-list').should('contain', 'Quality Assurance')
      cy.get('.position-list').should('contain', 'Istanbul, Turkey')
      cy.get('.position-list').should('contain', 'View Role') //Note, in the test task mantioned Apply Button instead of 'View Role'
      // Сlick on 'Apply button' in our case 'View Role'
      cy.contains('View Role').click()
      cy.url().should('include', 'jobs.lever.co/useinsider/')
    })
  })