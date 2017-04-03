var seleniumWebdriver = require('selenium-webdriver');
var assert = require('assert');
//var RegisterPage = require('../support/page_objects/RegisterPage');

module.exports = function () {

//  var register;

  this.Given(/^I visit the Register page$/, function() {
    return this.driver.get('https://github.com/cucumber/cucumber-js/tree/master');
    //register = new RegisterPage(this);
    //return register.visit('http://localhost:8080/');
  });

  this.Given(/^I add name (.*) and surname (.*)$/, function(name, surname) {
    //return register.addNameAndSurname(name, surname);
  });

  this.When(/^I click the Register button$/, function () {
   // return register.register();
  });

  this.Then(/^I should see the confirmation pop-up$/, function () {
//    register.successDialogMessagePresent().then(function(elementDisplayed) {
//      assert.equal(elementDisplayed, true, 'Success message not displayed');
//    });
  });

};

