describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should update the display', () => {
    cy.get('#number4').click();
    cy.get('.display').should('contain', 4)
  })

  it('should carryout arithematic operations', ()=> {
    
    cy.get('#number3').click();
    cy.get('#operator_add').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '7')
    
  })

  it('should be able to handle multiple operations changed together', ()=>{

    cy.get('#number2').click();
    cy.get('#operator-multiply').click();
    cy.get('#number6').click();
    cy.get('#operator_add').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '14')

  })

  it('should be able to output large,negative decimals', ()=> {
    cy.get('#number2').click();
    cy.get('#number4').click();
    cy.get('#decimal').click()
    cy.get('#number3').click();
    cy.get('#operator-divide').click();
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '0.243');
  })

  it('should be able to display output of a number divided by 0', ()=> {
    cy.get('#number7').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click()
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'Error');





  })
})