// JavaScript source code for consultation.html
/* 
      Author: Jian Zhao
      Date:   November 13, 2017
      file name: consultation.js
*/

"use strict";

/**
 * validate inputed by user
 * checkInput()
 */
function checkInput() {
    var validInput = true;
    var phoneNumReg = /^[2-9]\d{2}-\d{3}-\d{4}$/;

    // check phone number
    var telnum = document.getElementById("telnum").value;
    if (!phoneNumReg.test(telnum)) {
        alert("Please enter correct phone number!");
        document.getElementById("telnum").focus();
        return false;
    }

    if (validInput) {
        formatData();
    }

    return validInput;
}

// fomat json data
function formatData(){
    var submitInfo = {};

    submitInfo.lName = document.getElementById("lName").value;
    submitInfo.fName = document.getElementById("fName").value;
    submitInfo.email = document.getElementById("email").value;
    submitInfo.phone = document.getElementById("telnum").value;
    submitInfo.message = document.getElementById("message").value;
    
    alert("Sent successfully.");
}