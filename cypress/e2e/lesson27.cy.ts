import articles from '../fixtures/article.json'

describe('template spec', () => {
    it("Mocking", () => {
  
      cy.intercept(
        {
        
        method: "GET",
        url: "https://conduit-api.bondaracademy.com/api/articles?limit=10&offset=0", 
        },
        {
          statusCode: 200,

          body: articles

        })
  
      // Увійдіть в обліковий запис
      cy.visit("https://conduit.bondaracademy.com/login");
      cy.get('[placeholder="Email"]').type("test@i.ua");
      cy.get('[placeholder="Password"]').type("Test123@");
      cy.get('[type="submit"]').click();
      cy.wait(2000)

      cy.contains("My New Article").should('be.visible');
      cy.contains("This is my new article").should('be.visible');
    })
})