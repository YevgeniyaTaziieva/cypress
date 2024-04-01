import {FormLayoutsPage} from "../POM/FormLayoutPage"

describe('template spec', async() => {

  it('Saving subjects of elements', () => {

    cy.visitHomePage()

    cy.contains("Forms").click()

    cy.contains("Form Layouts").click()

    cy.contains("nb-card","Using the Grid").find('[for="inputEmail1"]').should('contain',"Email")

    cy.contains("nb-card","Using the Grid").find('[data-cy="imputEmail1"]')

    cy.contains("nb-card","Using the Grid").find('[for="inputPassword2"]').should('contain',"Password")

    cy.contains("nb-card","Using the Grid").find('[id="inputPassword2"]')

    //1 Using aliases

    cy.contains("nb-card","Using the Grid").as("usingTheGrid")

    cy.get("@usingTheGrid").find('[for="inputEmail1"]')

    cy.get("@usingTheGrid").find('[id="inputPassword2"]')

    //2 Using then() method 

    cy.contains("nb-card","Using the Grid").then(usingTheGrid=>{

      cy.wrap(usingTheGrid).find('[for="inputPassword2"]').should('contain',"Password")

      cy.wrap(usingTheGrid).find('[for="inputEmail1"]')

      cy.wrap(usingTheGrid).find('[id="inputPassword2"]')

    })

  })

  it('Extracting text from elements', () => {

    cy.visitHomePage()

    cy.contains("Forms").click()

    cy.contains("Form Layouts").click()

    //1 Using assertions

    cy.contains("nb-card","Using the Grid").find('[for="inputEmail1"]').should('contain',"Email")

    //2 Using then() method using JQuery

    cy.get('[for="inputEmail1"]').then(label=>{

      let text = label.text()

      

      expect(text).to.equal("Email")

    })

    //4 Using invoke()

    cy.get('[for="inputEmail1"]').invoke("text").then(label=>{

      expect(label).to.equal("Email")

    })

    //5 Using using then()

    cy.get('[for="inputEmail1"]').then(label=>{

      cy.wrap(label).should('contain',"Email")

    })

    //6 Getting attributes using invoke

    cy.get('[for="exampleInputEmail1"]').invoke('attr','class').then(classVal => {

        expect(classVal).to.equal("label")

    })

    cy.get('#exampleInputEmail1').invoke('attr','placeholder').then(placeholder => {

      expect(placeholder).to.equal("Email")

    })

     //6 Getting values from props

     cy.get('#exampleInputEmail1').type("ilya")

     cy.get('#exampleInputEmail1').invoke('prop',"value").then(text=>{

      expect(text).to.equal("ilya")

     })

  })

  it("Using POM",()=>{

    FormLayoutsPage.navigateTo()

    FormLayoutsPage.fillUsingTheGridForm()

  })

  it.only("test Basic form", () => {
    FormLayoutsPage.navigateTo()
    FormLayoutsPage.fillUsingTheBasicForm()
  })

})