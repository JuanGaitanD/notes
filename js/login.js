function nav(n) {
    var home = document.querySelector("#home");
    var login = document.querySelector("#login");
    var register = document.querySelector("#register");

    switch (n) {
        case 1:
            home.style.display = "none";
            login.style.display = "block";
            register.style.display = "none";

            document.querySelector("#username").value = "";
            document.querySelector("#email").value = "";
            document.querySelector("#password").value = "";
            break;

        case 2:
            home.style.display = "none";
            login.style.display = "none";
            register.style.display = "block";
            break;
    }

    /*
    document.querySelector("#email_login").value = "";
    document.querySelector("#password_login").value = "";
    document.querySelector("#username").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#password").value = "";
    */
}