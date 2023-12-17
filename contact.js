document.addEventListener("DOMContentLoaded", function () {
    // Function to check if emails match
    function emailValidation() {
        let emailInput = document.getElementById("email").value;
        let cemailInput = document.getElementById("cemail").value;
        let emailError = document.getElementById("emailEr");
        let cemailError = document.getElementById("cemailEr");

        if (isValidEmail(emailInput)) {
            emailError.innerHTML = "<p style='color:green'>Email valide</p>";
        } else {
            emailError.innerHTML = "";
        }

        if (emailInput !== cemailInput || emailInput === "" || cemailInput === "") {
            cemailError.innerHTML = "";
            return false;
        } else {
            cemailError.innerHTML = "<p style='color:green'>Les emails sont identiques</p>";
            return true;
        }
    }

    // Function to check if email is valid
    function isValidEmail(email) {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return email.match(mailformat);
    }

    // Function to validate name
    function nameValidation() {
        let eNameInput = document.getElementById("ename");
        let eNameError = document.getElementById("nomEr");

        if (eNameInput.value.length < 7) {
            eNameError.innerHTML = "Le nom doit avoir au moins 7 caractères.";
            return false;
        } else {
            eNameError.innerHTML = "<p style='color:green'>Nom valide</p>";
            return true;
        }
    }

    // Function to validate phone number
    function phoneValidation() {
        let phoneInput = document.getElementById("phone");
        let phoneError = document.getElementById("phoneEr");

        if (phoneInput.value === "") {
            phoneError.innerHTML = "Le numéro de téléphone ne peut pas être vide.";
            return false;
        } else if (isNaN(phoneInput.value)) {
            phoneError.innerHTML = "Le numéro ne doit contenir que des chiffres.";
            return false;
        } else {
            phoneError.innerHTML = "<p style='color:green'>Numéro valide</p>";
            return true;
        }
    }

    var formElement = document.getElementById("contact");

    // Add event listener for submit
    formElement.addEventListener("submit", function (e) {
        // Reset error messages
        let ids = ["erreur", "nomEr", "phoneEr", "emailEr", "cemailEr", "erreur"];
        ids.forEach((id) => (document.getElementById(id).innerHTML = ""));

        // Validate name, phone, and email as needed
        let isNameValid = nameValidation();
        let isPhoneValid = phoneValidation();
        let isEmailValid = emailValidation();

        // Check if any field is empty
        let inputs = formElement.querySelectorAll("input, textarea");
        for (let i = 0; i < inputs.length; i++) {
            if (!inputs[i].value) {
                alert("Veuillez renseigner tous les champs");
                e.preventDefault();
                return;
            }
        }

        // If any validation fails, prevent form submission
        if (!isNameValid || !isPhoneValid || !isEmailValid) {
            e.preventDefault();
        } else {
            // Check if emails are identical
            if (document.getElementById("email").value !== document.getElementById("cemail").value) {
                alert("Les emails ne sont pas identiques");
                e.preventDefault();
            } else {
                alert("Formulaire envoyé");
            }
        }
    });

    // Add event listener for keyup on the name input
    document.getElementById("ename").addEventListener("keyup", function () {
        nameValidation();
    });

    // Add event listener for keyup on the phone input
    document.getElementById("phone").addEventListener("keyup", function () {
        phoneValidation();
    });

    // Add event listener for keyup on the email input
    document.getElementById("email").addEventListener("keyup", function () {
        emailValidation();
    });

    // Add event listener for keyup on the cemail input
    document.getElementById("cemail").addEventListener("keyup", function () {
        emailValidation();
    });
});
