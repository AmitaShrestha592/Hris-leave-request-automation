// cypress/integration/sample_test.js
describe('My Third Test', () => {
  beforeEach(() => {
      // Handle uncaught exceptions
      Cypress.on('uncaught:exception', (err, runnable) => {
          if (err.message.includes('EmployeeGP is not defined')) {
              return false
          }
          return true
      })
  })

  it('Visits the hris leave application website', () => {
      // Step 1: Perform login using the custom command
      cy.login()

      // Step 2: Navigate to the specific page using a relative URL
      cy.visit('http://172.23.1.130:1902/HumanResourcesTransaction/LeaveRequest/index')

      // Step 3: Ensure the page has loaded correctly
      cy.url().should('include', '/HumanResourcesTransaction/LeaveRequest/index')

      // Step 4: Locate the <a> tag with the specified href and click it
      cy.get('a[href="/HumanResourcesTransaction/LeaveRequest/Create"]', { timeout: 10000 })
        .should('be.visible')
        .click()
        .then(() => {
            cy.log('Clicked the Create link')
        })


//fill up the fields
      //  cy.get('#FirstName').type("John")
        //cy.get('#LastName').type("Shrestha")

//select particular value in a dropdown
        cy.get('select[name="LeaveId"]').select('Annual Leave')
        //cy.wait(2000)
//select particular value in a dropdown
        cy.get('select[name="LeaveRequestType"]').select('First Half')
        //cy.wait(2000)
        //type date
        cy.get('input[name="LeaveStartDate"]').type('2081/04/20')
        //cy.wait(2000)

        //type date
        cy.get('input[name="LeaveEndDate"]').type('2081/04/20')
        //cy.wait(2000)

//get the hidden value
// cy.get('#ContactAddressWhileAwayEmployeeIdHidden').invoke('val').then((hiddenValue) => {
//     // Assuming the hiddenValue is '8' and you want to select the corresponding option in the dropdown
//     cy.get('select[id="ContactAddressWhileAwayEmployeeId"]').select(hiddenValue)
// }) 


        cy.get('#ContactAddressWhileAwayEmployeeId').select('243 - Prem Bahadur BK',  { force: true });

            //cy.wait(2000)
        
        
        

        cy.get('textarea[id="LeaveRequestCause"]').type('Personal reason' , { force: true })

       //cy.get('[data-attr-name="ReligionName"]').click()       
          //cy.wait(6000)
        
          cy.get('#btnApplyLeave').click();
          cy.get('#btnSave').click();






      // Step 6: Ensure the create form is visible
      
  })
})
