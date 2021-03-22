import { Given, When, Then } from '@cucumber/cucumber';
import registerPage from "../pageobjects/register.page";
import constants from "../pageobjects/constants.page";
import {expect} from 'chai';
import utilPage from '../pageobjects/utils.page';
import randomemail from '../pageobjects/randomemail';


         Given('user should be able to access the url of the application and click on signin', function () {
            browser.url('/');
            browser.maximizeWindow();
            registerPage.getSignin();  
         });

         When('user should be able to create an account by giving valid emailId', function () {
            registerPage.getCreateAcc(randomemail.mail());
            console.log(randomemail.mail());
            utilPage.doWait(constants.titles.LOGIN_TITLE);
            const title1 = registerPage.getPageTitle();
            console.log('login page title is : ', title1);
            expect(constants.titles.LOGIN_TITLE).to.equal(title1);  
          });

          Then('user should be able to register by filling personal information', function (dataTable) {
            utilPage.doWait(constants.titles.LOGIN_TITLE);
            const title1 = registerPage.getPageTitle();
            console.log('login page title is : ', title1);
            expect(constants.titles.LOGIN_TITLE).to.equal(title1);
            registerPage.getTitle();
            registerPage.getFName(dataTable.hashes()[0].FirstElement);
            registerPage.getLName(dataTable.hashes()[0].LastElement);
            registerPage.getPassword(dataTable.hashes()[1].FirstElement);
            registerPage.getDate(dataTable.hashes()[1].LastElement);
            registerPage.getMonth(dataTable.hashes()[2].FirstElement);
            registerPage.getYear(dataTable.hashes()[2].LastElement);
          });

          Then('user should be able to register by giving address', function (dataTable) {
            registerPage.getAddress(dataTable.hashes()[0].Address1);
            registerPage.getAdressLine(dataTable.hashes()[0].Address2);
            registerPage.getCity(dataTable.hashes()[1].Address1);
            registerPage.getState(dataTable.hashes()[1].Address2);
            registerPage.getZipcode(dataTable.hashes()[2].Address1);
            registerPage.getCountry(dataTable.hashes()[2].Address2);
            registerPage.getPhone(dataTable.hashes()[3].Address1);
            registerPage.getAddress2(dataTable.hashes()[3].Address2);
            registerPage.getRegbutton();
            utilPage.doWait(constants.titles.ACCOUNT_TITLE);
            const title2 = registerPage.getPageTitle();
            console.log('account page title is : ', title2);
            expect(constants.titles.ACCOUNT_TITLE).to.equal(title2);
          });

          Then('user should be able to add the product to the cart', function () {
            registerPage.getWomentag();
            registerPage.getTshirttag();
            const title3 = registerPage.getPageTitle();
            utilPage.doWait(constants.titles.ORDER_TITLE);
            console.log('ordered page title is : ', title3);
            expect(constants.titles.ORDER_TITLE).to.equal(title3);
            registerPage.getProduct();
            registerPage.getAddtoCart();
          });

          Then('user should be able to proceed to checkout', function () {
            registerPage.getProceed();  
            registerPage.getSummary();
            utilPage.doWait(constants.titles.PURCHASE_TITLE);
            const title4 = registerPage.getPageTitle();
            console.log('purchase page title is : ', title4);
            expect(constants.titles.PURCHASE_TITLE).to.equal(title4);
            registerPage.getCheckaddress();
            registerPage.getCheckbox();
            registerPage.getShipping();
          });