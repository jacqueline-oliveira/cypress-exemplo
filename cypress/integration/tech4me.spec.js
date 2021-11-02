
describe("testar site tech4me", () => {

it("acessar a pagina", () => {

    cy.visit("http://tech4me.great-site.net/");
});

it("verificar o titulo", () => {
    cy.title().should("include", "Tech4me");
})

it("digitar o email", () => {
    cy.get("#email").type("jacqueline@gmail.com")
})

it("digitar senha e confirmação", () => {
    cy.get("#senha").type("abc");
    cy.get("#confirmaSenha").type("def");
})

it("selecionar 3 aulas por semana", () => {
    cy.get("#totalAulas").select("3")
})

it("selecionando radio button", () => {
    cy.get("#feminino").check();
})


it("marcando e desmarcando checkboxes", () => {
    cy.get("#indicacao").check();
    cy.get("#pesquisa").check();
    cy.get("#redesSociais").check();

    cy.get("#indicacao").uncheck();
    cy.get("#redesSociais").uncheck();

})

it("testando o header", () => {
    cy.get("header h2").should("contain", "Escola de Tecnologia")
})

it("testando botao cancelar", () => {
    cy.get("#totalAulas").select("3") ;
    cy.get("#cancelar").click();
    cy.get("#totalAulas").should("contain", "1"); 
})


});