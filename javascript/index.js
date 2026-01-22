function submitHandler(e){
    e.preventDefault();

    const response = validityChecker();
    if(!response){
        return false;
    } else {
        const form = document.getElementById('form');
        form.style.display = "none";

        const errorDiv = document.getElementById("error");
        errorDiv.style.display = "none";

        const detail = document.getElementById("details");
        detail.style.display = "block";

        detailDisplayer();
    }
}

function validityChecker(){
    let error = "";

    // EMAIL CHECK
    const email = document.getElementById("email");
    if(email.validity.valueMissing){
        error += "Email can't be empty. ";
    } else if(email.validity.typeMismatch){
        error += "Invalid email format. ";
    }

    // PASSWORD CHECK
    const password = document.getElementById("password");
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

    if(!regex.test(password.value)){
        error += "Password must contain uppercase, lowercase and digit. ";
    }

    // GENDER CHECK
    const gender = document.getElementById("gender");
    if(gender.value === ""){
        error += "Gender must be selected. ";
    }

    // ROLE CHECK
    const role = document.querySelector("input[name='role']:checked");
    if(!role){
        error += "Role must be selected. ";
    }

    // PERMISSION CHECK (at least 2)
    const perms = document.querySelectorAll("input[name='permission']:checked");
    if(perms.length < 2){
        error += "At least two permissions must be selected. ";
    }

    if(error){
        errorHandler(error);
        return false;
    }
    return true;
}

// ERROR DISPLAY
function errorHandler(msg){
    const div = document.getElementById("error");
    div.innerText = msg;
    div.style.display = "block";
}

// DISPLAY DETAILS
function detailDisplayer(){
    document.getElementById("d-email").innerText =
        "Email: " + document.getElementById("email").value;

    document.getElementById("d-gender").innerText =
        "Gender: " + document.getElementById("gender").value;

    const role = document.querySelector("input[name='role']:checked");
    document.getElementById("d-role").innerText =
        "Role: " + role.value;

    const perms = document.querySelectorAll("input[name='permission']:checked");
    const permValues = Array.from(perms).map(p => p.value).join(", ");

    document.getElementById("d-permission").innerText =
        "Permissions: " + permValues;
}
