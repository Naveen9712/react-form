function Validation(values){
    let error = {};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

    if(values.email === ""){
        error.email = "Email should not be empty";
    }
    else if(!email_pattern.test(values.email)){
        error.email = "Email format is incorrect";
    } else {
        error.email = "";
    }

    if(values.password === ""){
        error.password = "Password should not be empty";
    }
    else if(!password_pattern.test(values.password)){
        error.password = "Password must contain at least one digit, one lowercase and one uppercase letter, and be at least 8 characters long";
    } else {
        error.password = "";
    }

    if(values.confirmPassword === ""){
        error.confirmPassword = "Confirm password should not be empty";
    }
    else if(values.password !== values.confirmPassword){
        error.confirmPassword = "Passwords do not match";
    } else {
        error.confirmPassword = "";
    }

    return error;
}

export default Validation;
