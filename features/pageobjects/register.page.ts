import utilPage from "./utils.page"

class RegisterPage {

    get signin() { return $("//a[@title = 'Log in to your customer account']")}
    get email() { return $("//input[@id='email_create']")}
    get createacc() { return $("//i[@class='icon-user left']")}
    get title() { return $('#id_gender2')}
    get fname() { return $('#customer_firstname')}
    get lname() { return $('#customer_lastname')}
    get pwd() { return $('#passwd')}
    get date() { return $('#days')}
    get month() { return $('#months')}
    get year() { return $('#years')}
    get address() { return $('#address1')}
    get addressline() {return $("//input[@id='address2']")}
    get city() { return $('#city')}
    get state() { return $('#id_state')}
    get zipcode() { return $('#postcode')}
    get country() { return $('#id_country')}
    get phone() { return $('#phone_mobile')}
    get address2() { return $('#alias')}
    get regbutton() { return $("//span[.='Register']")}
    get womentag() { return $ ("//a[.='Women']")}
    get tshirttag() { return $("//*[@id='block_top_menu']/ul/li[1]/ul/li[1]/ul/li[1]/a")}
    get addtocart() { return $("//span[.='Add to cart']")}
    get product() { return $("//img[@title='Faded Short Sleeve T-shirts']")}
    get proceed() { return $("//*[@id='layer_cart']/div[1]/div[2]/div[4]/a/span")}
    get summary() { return $("//span[.='Proceed to checkout']")}
    get checkaddress() { return $("//span[.='Proceed to checkout']")}
    get checkbox() { return $("//input[@id='cgv']")}
    get shipping() { return $("//*[@id='form']/p/button/span")}

    getPageTitle() { 
        return utilPage.doGetPageTitle();
    }
    
    getSignin() {
        utilPage.doClick(this.signin);
    }

    getCreateAcc(email : string) {
        utilPage.doSetValue(this.email, email);
        utilPage.doClick(this.createacc);
    }

    getTitle() {
        utilPage.doClick(this.title);
    }

    getFName(firstname : string) {
        utilPage.doSetValue(this.fname, firstname);
    }

    getLName(lastname : string) {
        utilPage.doSetValue(this.lname, lastname);
    }
      
    getPassword(pass : string) {
        utilPage.doSetValue(this.pwd, pass);
    }

    getDate(element : string) {
        this.date.selectByAttribute('value', element);    
    }
   
    getMonth(element : string) {
        return this.month.selectByAttribute('value', element);
    }

    getYear(element : string) {
        return this.year.selectByAttribute('value', element);
    }

    getAddress(add1 : string) {
        utilPage.doSetValue(this.address, add1);
    }

    getAdressLine(addline : string) {
        utilPage.doSetValue(this.addressline, addline);
    }

    getCity(cname : string) {
        utilPage.doSetValue(this.city, cname);
    }

    getState(element : string) {
        this.state.selectByAttribute('value', element);
    }

    getZipcode(code : string) {
        utilPage.doSetValue(this.zipcode, code);
    }

    getCountry(element : string) {
        this.country.selectByAttribute('value', element);
    }

    getPhone(phnum : string) {
        utilPage.doSetValue(this.phone, phnum);
    }

    getAddress2(add2 : string) {
        utilPage.doSetValue(this.address2, add2);
    }

    getRegbutton() {
        utilPage.doClick(this.regbutton);
    }

    getWomentag() {
        utilPage.moveToElement(this.womentag);
    }

    getTshirttag() {
        utilPage.moveToElement(this.tshirttag);
        utilPage.doClick(this.tshirttag);
    }

    getProduct() {
        utilPage.scrollView(this.product);
        utilPage.moveToElement(this.product);
    }

    getAddtoCart() {
        utilPage.moveToElement(this.addtocart);
        utilPage.doClick(this.addtocart);
    }

    getProceed() {
        utilPage.doClick(this.proceed);
    }

    getSummary() {
        utilPage.scrollView(this.summary);
        utilPage.doClick(this.summary);
    }

    getCheckaddress() {
        utilPage.scrollView(this.checkaddress);
        utilPage.doClick(this.checkaddress);
    }

    getCheckbox() {
        utilPage.scrollView(this.checkbox);
        this.checkbox.isExisting();
        this.checkbox.click();
    }
    getShipping() {
        utilPage.doClick(this.shipping);
    }
}
export default new RegisterPage();