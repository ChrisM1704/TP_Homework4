function validateFname(){
    fname = document.getElementById("fname").value.trim();
    var namePattern = /^[a-zA-Z'-]+$/; 
    // check if first name field is empty
    if (fname == ""){
        document.getElementById("fname-error").innerHTML = "First name field cannot be empty"
         return false;
    }

      else if (fname != ""){
    if (!fname.match(namePattern)) { // checks if first name matches the pattern
        document.getElementById("fname-error").innerHTML = "Letters, apostrophes, and dashes only.";
         return false;
    }

      else if (fname.length < 2){ // check if first doesnt have more than 2 characters
        document.getElementById("fname-error").innerHTML = "First name cannot be less than 2 characters.";
        return false;
      }

      else if (fname.length > 30){ // check if first doesnt have more than 30 characters
        document.getElementById("fname-error").innerHTML ="First name cannot be more than 30 characters.";
        return false;
      }
     else {
        document.getElementById("fname-error").innerHTML = "";
        return true;
     }
      

      }
}
function validateMname(){
 
    let Mname = document.getElementById("Mname").value;
    const namePattern = /^[A-Z]$/;
    Mname = Mname.toUpperCase();
    document.getElementById("Mname").value = Mname;
    
    if (Mname == "")
    {
      
        document.getElementById("Mname-error").innerHTML = "";
        return true;
    }
    else if (!Mname.match(namePattern)){
        document.getElementById("Mname-error").innerHTML= "Middle initial must be single uppercase letter.";
    return false;
    }
    else {
        document.getElementById("Mname-error").innerHTML = "";
        return true;

    }
  }




    

    

function validateLname(){
    lname = document.getElementById("lname").value.trim();
    var namePattern = /^[a-zA-Z'-]+$/; 
    // check if Last name field is empty
    if (lname == ""){
        document.getElementById("lname-error").innerHTML = "Last name field cannot be empty"
         return false;
    }

      else if (lname != ""){
    if (!lname.match(namePattern)) { // checks if Last name matches the pattern
        document.getElementById("lname-error").innerHTML = "Letters, apostrophes, and dashes only.";
         return false;
    }

      else if (lname.length < 2){ // check if Last doesnt have more than 2 characters
        document.getElementById("lname-error").innerHTML = "Last name cannot be less than 2 characters.";
        return false;
      }

      else if (lname.length > 30){ // check if last doesnt have more than 30 characters
        document.getElementById("lname-error").innerHTML ="Last name cannot be more than 30 characters.";
        return false;
      }
     else {
        document.getElementById("lname-error").innerHTML = "";
        return true;
     }
      

      }
}
// Javascript code for validating Date of Birth
function validateDOB(){
 DOB = document.getElementById("DOB");
  let date = new Date(DOB.value);
  let maxDate = new Date().setFullYear(new Date().getFullYear() - 120);
  if (date > new Date()){
    document.getElementById("DOB-error").innerHTML = "Date cannot be in the future.";
    DOB.value="";
    return false;
  }
  else if (date < new Date(maxDate)){
    document.getElementById("DOB-error").innerHTML = "Date cannot be more than 120 years ago.";
    DOB.value="";
    return false;
  }
  else {
    document.getElementById("DOB-error").innerHTML = "";
    return true;
  }
}
 //Js code for social
 function validateSocial(){
  const social = document.getElementById("social").value;
  const ssnR = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;
  if (!ssnR.test(social)){
    document.getElementById("social-error").innerHTML ="Please enter a valid Social Security Number.";
    return false;
  }
  else {
    document.getElementById("social-error").innerHTML = "";
    return true;
  }
 }
 
 

 //Js code for validating Address 1
 function validateAddress1(){
  var ad1 = document.getElementById("address1").value
  console.log(ad1);
  console.log(ad1.length);
  if (ad1.length < 2){
    document.getElementById("address1-error").innerHTML ="Please enter your address on the address line.";
    return false;
  }
  else {
    document.getElementById("address1-error").innerHTML = "";
    return true;
  }
 }
 //Js code for city
 function validateCity(){
  city = document.getElementById("city").value.trim();
  if (!city){
    document.getElementById("city-error").innerHTML = "City cannot be left blank";
    return false;
  }
  else{
    document.getElementById("city-error").innerHTML = "";
    return true;
  }
 }
 
 // Js code for zip code
 function validateZip(){
  const zipInput = document.getElementById("zip");
  let zip = zipInput.value.replace(/[^\d-]/g,"");
  if (!zip) {
    document.getElementById("zip-error").innerHTML = "Zip code cannot be left blank";
    return false;
  }
  if (zip.length > 5) {
    zip = zip.slice(0,5) + "-" + zip.slice(5,9);
    }
    else {
      zip = zip.slice(0,5);
    }
    zipInput.value = zip;
    document.getElementById("zip-error").innerHTML = "";
    return true;
 }

 //Js code for email
 function validateEmail (){
  email = document.getElementById("email").value;
  var emailR = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email == ""){
    document.getElementById("email-error").innerHTML = "Email address cannot be empty";
    return false;
  }
  else if (!email.match(emailR)){
    document.getElementById("email-error").innerHTML = "Please enter a valid email address";
    return false;
  }
  else {
    document.getElementById("email-error").innerHTML = "";
    return true;
  }
 }

//Js code for Phone Number
function validatePhoneNumber(){
  const phoneInput = document.getElementById("PhoneNumber");
  const phone = phoneInput.value.replace(/\D/g,"");
  if(phone.length != 10){
    document.getElementById("PhoneNumber-error").innerHTML = "Phone Number cannot be left blank";
    return false;
  }
  const formattedPhone = phone.slice(0,3) +"-"+ phone.slice(3,6) +"-"+ phone.slice(6,10)
  phoneInput.value = formattedPhone;
  document.getElementById("PhoneNumber-error").innerHTML = "";
  return true;
}
//Js code for slider
function updateSlider(){
  const value = document.getElementById("PainLevel").value;
  document.getElementById("painValue").innerHTML = value;
}

 //Js code for Username validation
 function validateUser(){
  let username = document.getElementById("User").value;
  username = username.toLowerCase();
  document.getElementById("User").value = username;
  if (username.length === 0){
    document.getElementById("User-error").innerHTML = "Username field cannot be empty";
    return false;
  }
  if(!isNaN(username.charAt(0))){
    document.getElementById("User-error").innerHTML = "Username cannot begin with a number";
    return false;
    }
    let regex = /^[a-zA-Z0-9_]+$/;
    if(!regex.test(username)){
      document.getElementById("User-error").innerHTMl = "Username can only contain letters, numbers, or underscores";
      return false;
    }
    else if (username.length < 5 ){
      document.getElementById("User-error").innerHTML = "Username cannot be less than 5 characters";
      return false;
    }
    else if (username.length > 30){
      document.getElementById("User-error").innerHTML = "Username cannot exceed 30 characters";
      return false;
    }
    else {
      document.getElementById("User-error").innerHTML = "";
      return true;
    }
 }

 // Js code for password validation
 function validatePassword1(){
  const Password1 = document.getElementById("Password1").value;
  const  User = document.getElementById("User").value;
  const errorMessage = [];
  if(!Password1.match(/[a-z]/)){
    errorMessage.push("Enter at least one lowercase letter");
  }
  if(!Password1.match(/[A-Z]/)){
errorMessage.push("Enter at least one uppercase letter");
  }
  if(!Password1.match(/[0-9]/)){
    errorMessage.push("Enter at least one number");
  }
  if(!Password1.match(/[!\@#\$%&*\-_\\.+\(\)]/)){
    errorMessage.push("Enter at least one special character");
  }
  if(Password1 == User || Password1.includes(User)){
    errorMessage.push("Password cannot contain username");
  }
  const errorContainer = document.querySelector(".pass-message");
  errorContainer.innerHTML = errorMessage.map(msg => `<span>${msg}</span><br>`).join("");
 return errorMessage.length === 0;
  }
 

 //Js for confirmation password
 function confirmConfirmationPassword(){
  Password1 = document.getElementById("Password1").value;
  confirmationPassword = document.getElementById("ConfirmationPassword").value;
  if(confirmationPassword !== Password1){
    document.getElementById("ConfirmationPassword-error").innerHTML = "Password does not match";
    return false;
  }
  else{
    document.getElementById("ConfirmationPassword-error").innerHTML = "";
    return true;
  }
 }

 //Js code for review button
 function reviewInput(){
   var formcontent = document.getElementById("signup");
    var formoutput = "<table class='output'><tr><th colspan='2'>Review Your Information:</th></tr>";

    for (var i = 0; i < formcontent.elements.length; i++) {
        var el = formcontent.elements[i];
        var datatype = el.type;
        var name = el.name;
        var value = el.value;

        // skip elements with no name
        if (!name) continue;

        switch (datatype) {
            case "checkbox":
                if (el.checked) {
                    formoutput += "<tr><td align='right'>" + name + "</td>";
                    formoutput += "<td class='outputdata'>&#x2713;</td></tr>";
                }
                break;

            case "radio":
                if (el.checked) {
                    formoutput += "<tr><td align='right'>" + name + "</td>";
                    formoutput += "<td class='outputdata'>" + value + "</td></tr>";
                }
                break;

            case "range":
                // Only show the slider if the user moved it off the default (0)
                if (value !== "0") {
                    formoutput += "<tr><td align='right'>" + name + "</td>";
                    formoutput += "<td class='outputdata'>" + value + "</td></tr>";
                }
                break;

            case "button":
            case "submit":
            case "reset":
                // skip
                break;

            default:
                if (value !== "") {
                    formoutput += "<tr><td align='right'>" + name + "</td>";
                    formoutput += "<td class='outputdata'>" + value + "</td></tr>";
                }
        }
    }

    formoutput += "</table>";
    document.getElementById("showInput").innerHTML = formoutput;
}
function removeReview(){
  document.getElementById("showInput").innerHTML = "";
}

function showAlert(){
  var alertBox = document.getElementById("alert-box");
  var closeAlert = document.getElementById("close-alert");

  alertBox.style.display = "block";
  closeAlert.onclick = function(){
    alertBox.style.display = "none";
  };
}

function validateEverything(){
  let valid = true;
  
  if(!validateFname()){
    valid = false;
  }
  if(!validateMname()){
    valid = false;
  }
  if(!validateLname()){
    valid = false;
  }
  if (!validateDOB()){
    valid = false;
  }
  if (!validateSocial()){
    valid = false;
  }
  if (!validateAddress1()){
    valid = false;
  }
  if (!validateCity()){
    valid = false;
  }
if (!validateZip()){
    valid = false;
  }
  if (!validateEmail()){
    valid = false;
  }
  if (!validatePhoneNumber()){
    valid = false;
  }
  if (!validateUser()){
    valid = false;
  }
  if (!validatePassword1()){
    valid = false;
  }
  if (!confirmConfirmationPassword()){
    valid = false;
  }
 const submitButton = document.getElementById("submit")
   if(valid){
    submitButton.disabled = false;
  }
  else{
    submitButton.disabled = true;
    showAlert();
  }
}

function setCookie(name, cvalue, expiryDays) {
    var day = new Date();
    day.setTime(day.getTime() + (expiryDays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + day.toUTCString();
    document.cookie = name + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(name) {
    var cookieName = name + "=";
    var cookies = document.cookie.split(';');

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.indexOf(cookieName) == 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }
    return "";
}
var inputs = [
  {id:"fname", cookieName: "firstName"},
  {id:"Mname", cookieName: "middleName"},
  {id:"lname", cookieName: "lastName"},
  {id:"DOB", cookieName: "dob"},
  {id:"social", cookieName: "ssn"},
  {id:"address1", cookieName: "address1"},
  {id:"city", cookieName: "city"},
  {id:"zip", cookieName: "zipCode"},
  {id:"city", cookieName: "city"},
  {id:"email", cookieName: "email"},
  {id:"city", cookieName: "city"},
  {id:"PhoneNumber", cookieName: "phone"},
  {id:"User", cookieName: "userName"},

]

inputs.forEach(function (input) {
    var inputElement = document.getElementById(input.id);

    // Prefill input fields
    var cookieValue = getCookie(input.cookieName);
    if (cookieValue !== "") {
        inputElement.value = cookieValue;
    }

    // Set a cookie when the input field changes
    inputElement.addEventListener("input", function () {
        setCookie(input.cookieName, inputElement.value, 30);
    });
});

var firstName = getCookie("firstName");
if (firstName !== "") {
    document.getElementById("Welcome1").innerHTML = "Welcome back, " + firstName + "!<br>";
    document.getElementById("Welcome2").innerHTML =
        "<a href='#' id='new-user'>Not " + firstName + "? Click here to start a new form.</a>";

    document.getElementById("new-user").addEventListener("click", function () {
        inputs.forEach(function (input) {
            setCookie(input.cookieName, "", -1);
        });
        location.reload();
    });
}

document.getElementById("remember-me").addEventListener("change", function () {
    const rememberMe = this.checked;

    if (!rememberMe) {
        // If "Remember Me" is unchecked, delete cookies
        deleteAllCookies();
        console.log("All cookies deleted because 'Remember Me' is unchecked.");
    } else {
        // If "Remember Me" is checked or rechecked, save cookies
        inputs.forEach(function (input) {
            const inputElement = document.getElementById(input.id);
            if (inputElement.value.trim() !== "") {
                setCookie(input.cookieName, inputElement.value, 30);
            }
        });
        console.log("Cookies saved because 'Remember Me' is checked.");
    }
});

function deleteAllCookies() {
    document.cookie.split(";").forEach(function (cookie) {
        let eqPos = cookie.indexOf("=");
        let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";
    });
}
document.addEventListener("DOMContentLoaded", function () {
    const rememberMe = document.getElementById("remember-me").checked;

    if (!rememberMe) {
        deleteAllCookies();
    }
});