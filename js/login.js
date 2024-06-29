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

            document.querySelector("#login_btn").addEventListener("click", (e) => {
                e.preventDefault();
                var email = document.querySelector("#email_login").value;
                var clave = document.querySelector("#password_login").value;

                lg.ingresar(email, clave);
            });
            break;

        case 2:
            home.style.display = "none";
            login.style.display = "none";
            register.style.display = "block";

            document.querySelector("#register_btn").addEventListener("click", (e) => {
                e.preventDefault();
                var username = document.querySelector("#username").value;
                var email = document.querySelector("#email").value;
                var clave = document.querySelector("#password").value;

                lg.registrar(username, email, clave);
            });
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

