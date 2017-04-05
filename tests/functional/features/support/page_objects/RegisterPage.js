'use strict';
var BasePage = require('./BasePage');
var assert = require('assert');

var APP_DIV = {id: 'app'};
var REGISTER_HEADER_LABEL = {id: 'register-header-label'};
var REGISTER_BUTTON = {id: 'register-button'};
var NAME_FIELD = {id: 'name-field'};
var SURNAME_FIELD = {id: 'surname-field'};
var CITY_SELECT_FIELD = {id: 'city-select-field'};
var THANK_YOU_DIALOG = {id: 'thank-you-dialog'};
var OK_DIALOG_BUTTON = {id: 'ok-dialog-button'};

function RegisterPage(driver, url) {
  BasePage.call(this, driver);
  this.visit(url);
  this.isDisplayed(APP_DIV).then(function(elementDisplayed) {
    assert.equal(elementDisplayed, true, 'The app page didnt load!');
  });
}

RegisterPage.prototype = Object.create(BasePage.prototype);
RegisterPage.prototype.constructor = RegisterPage;

RegisterPage.prototype.addNameAndSurname = function(name, surname) {
  this.type(NAME_FIELD, name);
  this.type(SURNAME_FIELD, surname);
};

RegisterPage.prototype.register = function() {
  this.click(REGISTER_BUTTON);
};

RegisterPage.prototype.closeDialog = function() {
  this.click(OK_DIALOG_BUTTON);
};

RegisterPage.prototype.successDialogMessagePresent = function() {
  this.waitForIsDisplayed(THANK_YOU_DIALOG, 1000);
  return this.isDisplayed(THANK_YOU_DIALOG);
};

module.exports = RegisterPage;
