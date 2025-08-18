//form-data variables
const form = document.getElementById("userForm");
const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const phone = document.getElementById("phone");
//form-error variables
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const phoneError = document.getElementById("phoneError");
const formSuccess = document.getElementById("formSuccess");

function validateName() {
  if (name.value.trim() === "") {
    nameError.textContent = "Full Name is required.";
    nameError.style.borderColor = "#e74c3c";
    return false;
  }
  nameError.textContent = "";
  nameError.style.borderColor = "#2ecc71";
  return true;
}

function validateEmail() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.value.trim() === "") {
    emailError.textContent = "Email is required.";
    email.style.borderColor = "#e74c3c";
    return false;
  } else if (!emailRegex.test(email.value)) {
    emailError.textContent = "Invalid email format.";
    email.style.borderColor = "#e74c3c";
    return false;
  }
  emailError.textContent = "";
  email.style.borderColor = "#2ecc71";
  return true;
}

function validatePassword() {
  const value = password.value;
  const minLength = 8;
  const specialChar = /[!@#$%^&*(),.?":{}|<>]/;
  if (value.length < minLength) {
    passwordError.textContent = "Password must be at least 8 characters.";
    password.style.borderColor = "#e74c3c";
    return false;
  } else if (!specialChar.test(value)) {
    passwordError.textContent = "Password must include a special character.";
    password.style.borderColor = "#e74c3c";
    return false;
  }
  passwordError.textContent = "";
  password.style.borderColor = "#2ecc71";
  return true;
}

function validatePhone() {
  const phoneRegex = /^\d{10,15}$/;
  if (phone.value.trim() === "") {
    phoneError.textContent = "Phone Number is required.";
    phone.style.borderColor = "#e74c3c";
    return false;
  } else if (!phoneRegex.test(phone.value)) {
    phoneError.textContent = "Phone Number must be 10-15 digits.";
    phone.style.borderColor = "#e74c3c";
    return false;
  }
  phoneError.textContent = "";
  phone.style.borderColor = "#2ecc71";
  return true;
}

name.addEventListener("input", validateFullName);
email.addEventListener("input", validateEmail);
password.addEventListener("input", validatePassword);
phone.addEventListener("input", validatePhone);

form.addEventListener("submit", function (e) {
  e.preventDefault();
  formSuccess.textContent = "";
  const validFullName = validateFullName();
  const validEmail = validateEmail();
  const validPassword = validatePassword();
  const validPhone = validatePhone();

  if (validFullName && validEmail && validPassword && validPhone) {
    formSuccess.textContent = "Form submitted successfully!";
    form.reset();
    [name, email, password, phone].forEach(
      (input) => (input.style.borderColor = "")
    );
  }
});
