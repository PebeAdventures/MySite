
function enableSubmit() {
    const nameField = document.getElementById("fname");
    const emailField = document.getElementById("femail");
    const textBoxField = document.getElementById("ftextBox");
    if (nameField.value.trim() != "" && emailField.value.trim() != "" && textBoxField.value.trim() != "") {
        document.getElementById("myBtn").disabled = false;
    } else { document.getElementById("myBtn").disabled = true; }
}

function nameValidation() {
    const nameField = document.getElementById("fname");
  //ToDo letters{0,20} 
    const regex = /^(\b[A-Z]\w*\s*)+$/;
    return regex.test(nameField.value);
}

function emailValidation() {
    const emailField = document.getElementById("femail");
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regex.test(emailField.value);
}

function validation() {
    const nameState = true;
    const emailState = true;
    if (nameValidation() != true) {
        alert("Name must containt only letters and space, and each word must start with capital letter and not longer then 20 letters.");
        nameState = false;
    }
    if (emailValidation() != true) {
        alert("Provide valid email adress.");
        emailState = false;
    }

    if (nameState == true && emailState == true) {
        alert("email has been send");
    } else {
        return false;
    }
}
