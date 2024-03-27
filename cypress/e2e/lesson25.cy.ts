describe('test', () => {
  beforeEach("", ()=> {
    cy.visit("https://pompo.cz/");
    cy.get(".focus-content")
      .contains("Přijímám")
      .click()
  })
  it('Search on Comfy', () => {
    cy.get('.header-search-inline')
      .should("be.visible")
      .find(".form-control.autocomplete-control")
      .click()
      .clear()
      .type("lego")

      cy.get('.btn-search').click()

      cy.get('h1').should("contain.text", 'Vyhledávání „lego“')

  })
})
