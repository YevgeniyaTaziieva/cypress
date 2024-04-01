export class FormLayoutsPage{

    static navigateTo(){

        cy.visitHomePage()

        cy.contains("Forms").click()

        cy.contains("Form Layouts").click()

    }

    static fillUsingTheGridForm(){

        cy.contains("nb-card","Using the Grid").then(usingTheGrid=>{

            cy.wrap(usingTheGrid).find('[id="inputEmail1"]').type("email@gmail.com")

            cy.wrap(usingTheGrid).find('[id="inputPassword2"]').type("strongpassword")

            cy.wrap(usingTheGrid).find('nb-radio input').eq(0).click({force:true})

          })

          //cy.contains("nb-card","Basic form").find('nb-checkbox input').click({force:true})

    }       

    static fillUsingTheBasicForm() {
        cy.contains("nb-card", "Basic form").then(usingTheBasic => {
            cy.wrap(usingTheBasic).find('#exampleInputEmail1').type("email@gmail.com");
            cy.wrap(usingTheBasic).find('#exampleInputPassword1').type("strongpassword");
            cy.wrap(usingTheBasic).find(".custom-checkbox").click();
        });
    }
    

}