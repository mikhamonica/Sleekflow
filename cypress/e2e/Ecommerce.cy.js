import Ecommerce from "../Pages/Ecommerce-Object"

let Object = new Ecommerce


describe('Searching Iphone 15 Pro', ()=>{

let DataSearching;

    before ('Searching Iphone 15 Pro',() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from failing the test
            return false;
        })
        cy.fixture("Ecommerce_Data.json").then((data)=>{
            DataSearching = data;
        })
    })
       

    it('Bhineka Indonesia', () => {
        cy.visit('https://www.bhinneka.com/')
        //cy.xpath('//img[@src="//laz-img-cdn.alicdn.com/images/ims-web/TB1Hs8GaMFY.1VjSZFnXXcFHXXa.png"]').should('be.visible','content.text','Iphone 15 pro')
        Object.InputSearchBarBhineka(DataSearching.SearchData)
        Object.ClickSearchButtonBhineka()
        cy.xpath('//div[@class="bmd-product-bar__search-key"]').should('be.visible','content.text','Iphone 15 pro')
        Object.ClickSortbyBhineka()
        cy.wait(4000)
        Object.ClickAscendingSortBy()
        cy.wait(4000)
    })

    it('Bukalapak Indonesia', () => {
        cy.visit('https://www.bukalapak.com/')
        //cy.xpath('//img[@src="//laz-img-cdn.alicdn.com/images/ims-web/TB1Hs8GaMFY.1VjSZFnXXcFHXXa.png"]').should('be.visible','content.text','Iphone 15 pro')
        Object.InputSearchBarBKL(DataSearching.SearchData)
        Object.ClickSearchButtonBKL()
        cy.xpath('//h1[@data-test="title"]').should('be.visible','content.text','Iphone 15 pro')
        Object.ClickSortbyBKL()
        Object.ClickAscendingSortByBKL()
        cy.wait(6000)
    })


})
    