//for ids
const form = document.querySelector("#newsletter-form");
const signup = document.querySelector("#signup");
const success = document.querySelector("#success");
const submittedEmail = document.querySelector("#submitted-email");
const dismiss = document.querySelector("#dismiss");


function updateSuccessMessage(email){
  //update strong tag with email
  submittedEmail.textContent = email;
}


function switchSections(){
  signup.classList.toggle("hide");
  success.classList.toggle("hide");
}

function isValidEntry(str) {
    const reg = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    return reg.test(str);
  }
  
function showErrors() {
    const errorMss = document.querySelector(".error-message");
    const input = document.querySelector("#email");
    errorMss.classList.remove("hide");
    input.classList.add("error");
  }

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = form.querySelector("#email");
    const valid = isValidEntry(email.value);
    if (!valid) {
        return showErrors();
      }
      if (valid) {
        updateSuccessMessage(email.value);
        switchSections();
      }
});

dismiss.addEventListener("click", () => {
    switchSections();
    updateSuccessMessage("");
});

