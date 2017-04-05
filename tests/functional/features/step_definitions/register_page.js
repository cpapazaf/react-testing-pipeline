'use strict'
var seleniumWebdriver = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');
var assert = require('assert');
var RegisterPage = require('../support/page_objects/RegisterPage');


// Follow https://github.com/cucumber/cucumber-js/blob/master/docs/support_files/step_definitions.md

defineSupportCode(function({Given, When, Then}) {

  var register;

  Given(/^I visit the Register page$/, function() {
    register = new RegisterPage(this.driver, 'http://localhost:3000/');
  });

  Given(/^I add name (.*) and surname (.*)$/, function(name, surname) {
    return register.addNameAndSurname(name, surname)
  });

  When(/^I click the Register button$/, function () {
    return register.register();
  });

  Then(/^I should see the confirmation pop-up$/, function () {
    register.successDialogMessagePresent().then(function(elementDisplayed) {
      assert.equal(elementDisplayed, true, 'Success message not displayed');
    });
  });

});

