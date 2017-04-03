"use strict";
import React from 'react';
import { renderIntoDocument } from 'react-addons-test-utils';
import { findDOMNode } from 'react-dom'
import RegisterForm from "./RegisterForm.jsx";

describe("LoginScreen", () => {

    it("should display default form title", () => { 
        let component = renderIntoDocument(<RegisterForm />);
        let node = findDOMNode(component);
        expect(node.textContent).toContain('Register Form');
    });

    it("should display login form title", () => { 
        let component = renderIntoDocument(<RegisterForm registerHeaderLabel="Login Form" />);
        let node = findDOMNode(component);
        expect(node.textContent).toContain('Login Form');
    });
    
    it("should display button text Register", () => {
        // add the registerHeaderLabel just to make the first Register go away.  
        let component = renderIntoDocument(<RegisterForm registerHeaderLabel="Login Form" />);
        let node = findDOMNode(component);
        expect(node.textContent).toContain('Register');
    });
});
