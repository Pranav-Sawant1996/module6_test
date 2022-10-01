let globalisSubmit = false;

function reset() {
  document.getElementById("first-name").value = "";
  document.getElementById("last-name").value = "";
  document.getElementById("email-id").value = "";
  document.getElementById("password").value = "";
  document.getElementById("confirm-password").value = "";
  document.getElementById("t-n-c").checked = false;

  document.getElementById("first-name-valid").style.display = "none";
  document.getElementById("last-name-valid").style.display = "none";
  document.getElementById("email-valid").style.display = "none";
  document.getElementById("password-valid").style.display = "none";
  document.getElementById("confirm-password-valid").style.display = "none";
}
function validate() {
  // gettiing values
  let error = false;
  let firstName = document.getElementById("first-name").value;
  let lastName = document.getElementById("last-name").value;
  let email = document.getElementById("email-id").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirm-password").value;
  let check = document.getElementById("t-n-c").checked;

  // validation

  // first name
  if (firstName.length >= 3) {
    document.getElementById("first-name-invalid").style.display = "none";
    document.getElementById("first-name-valid").style.display = "block";
  } else {
    error = true;
    document.getElementById("first-name-invalid").style.display = "block";
    document.getElementById("first-name-valid").style.display = "none";
  }

  // last name
  if (lastName.length >= 3) {
    document.getElementById("last-name-invalid").style.display = "none";
    document.getElementById("last-name-valid").style.display = "block";
  } else {
    error = true;
    document.getElementById("last-name-invalid").style.display = "block";
    document.getElementById("last-name-valid").style.display = "none";
  }

  // email
  if (
    email.length > 0 &&
    email.includes("@") &&
    email.includes(".") &&
    email.indexOf("@") != 0 &&
    email.substr(email.lastIndexOf(".") + 1).length >= 2
  ) {
    document.getElementById("email-invalid").style.display = "none";
    document.getElementById("email-valid").style.display = "block";
  } else {
    error = true;
    document.getElementById("email-invalid").style.display = "block";
    document.getElementById("email-valid").style.display = "none";
  }

  //   password
  if (
    password.length >= 8 &&
    (password.includes("$") ||
      password.includes("#") ||
      password.includes("@")) &&
    (password.includes("0") ||
      password.includes("1") ||
      password.includes("2") ||
      password.includes("3") ||
      password.includes("4")
    )
  ) {
    document.getElementById("password-invalid").style.display = "none";
    document.getElementById("password-valid").style.display = "block";
  } else {
    error = true;
    document.getElementById("password-invalid").style.display = "block";
    document.getElementById("password-valid").style.display = "none";
  }

  // confirm password
  if (password === confirmPassword && confirmPassword.length > 0) {
    document.getElementById("confirm-password-invalid").style.display = "none";
    document.getElementById("confirm-password-valid").style.display = "block";
  } else {
    error = true;
    document.getElementById("confirm-password-invalid").style.display = "block";
    document.getElementById("confirm-password-valid").style.display = "none";
  }

  // checkbox
  if (check) {
    document.getElementById("tnc").style.display = "none";
  } else {
    error = true;
    document.getElementById("tnc").style.display = "block";
  }

  if (!error) {
    alert("Your details have been saved successfully!");
    reset();
  }
}
