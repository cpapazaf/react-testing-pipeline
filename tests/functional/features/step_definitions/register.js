'use strict';
var seleniumWebdriver = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');
var assert = require('assert');
var RegisterPage = require('../support/page_objects/RegisterPage');

 defineSupportCode(function({Given, When, Then}) {

  var register;

  Given(/^I visit the Register page$/, function() {
    register = new RegisterPage(this.driver);
    register.visit('http://localhost:8080/');
  });

  Given(/^I add name (.*) and surname (.*)$/, function(name, surname) {
    register.addNameAndSurname(name, surname);
  });

  When(/^I click the Register button$/, function () {
    register.register();
  });

  Then(/^I should see the confirmation pop-up$/, function (how_many) {
    register.successDialogMessagePresent().then(function(elementDisplayed) {
      assert.equal(elementDisplayed, true, 'Success message not displayed');
    });
  });

});
