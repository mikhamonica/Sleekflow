class Ecommerce {
    element={
        SearchBarBhineka :() => cy.xpath ('//input[@class="search-query form-control oe_search_box border-0 text-bg-"]'),
        SearchButtonBhineka :() => cy.xpath ('(//button[@title="Pencarian"])[2]'),
        SortbyBhineka :() => cy.xpath ('//a[@data-bs-toggle="dropdown"]'),
        AscendingSortBy :() => cy.xpath ('//div[@class="dropdown-menu dropdown-menu-end show"]/a[5]'),


        SearchBarBKL :() => cy.xpath ('//div[@id="v-omnisearch"]'),
        SearchButtonBKL :() => cy.xpath ('//button[@title="Cari"]'),
        SortbyBKL:() => cy.xpath ('(//div[@class="bl-dropdown__icon-toggle"])[1]'),
        AscendingSortByBKL:() => cy.xpath ('//ul[@class="bl-dropdown__option"]/li[3]'),

    }

    InputSearchBarBhineka(SearchBarBhineka){
        this.element.SearchBarBhineka().type(SearchBarBhineka)
    }

    ClickSearchButtonBhineka(){
        this.element.SearchButtonBhineka().click()
    }

    ClickSortbyBhineka(){
        this.element.SortbyBhineka().click()
    }

    ClickAscendingSortBy(){
        this.element.AscendingSortBy().click()
    }


    InputSearchBarBKL(SearchBarBKL){
        this.element.SearchBarBKL().type(SearchBarBKL).type('{enter}')
    }

    ClickSearchButtonBKL(){
        this.element.SearchButtonBKL().click()
    }

    ClickSortbyBKL(){
        this.element.SortbyBKL().click()
    }

    ClickAscendingSortByBKL(){
        this.element.AscendingSortByBKL().click()
    }


}

export default Ecommerce