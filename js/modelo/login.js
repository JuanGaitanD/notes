// Class login, here are the methods to login and register the user
class login {
    constructor(auth, db) {
        this.usuario = '';
        this.clave = '';
        this.auth = auth;
        this.db = db;
        this.home_content = home_content;
        this.login_content = login_content;
        this.note_content = note_content;
    }

    ingresar(email, clave) {
        /* Validación de datos */
        if (email == "" || clave == "") {
            alert("Por favor llene todos los campos");
            return;
        }

        if (this.#validar_email(email)) return;

        /* Va a ingresar al usuario */
        this.auth.signInWithEmailAndPassword(email, clave)
            .then((userCredential) => {
                var user = userCredential.user;
                console.log(user.uid);
                localStorage.setItem("uid", user.uid);
            })
            .catch((error) => {
                alert("Usuario o contraseña incorrectos");
                document.querySelector("#email_login").value = "";
                document.querySelector("#password_login").value = "";
                return;
            })

        this.#page(1);
    }

    registrar(usuario, email, clave,) {
        /* Validación de datos */
        if (this.#validar_datos_registro(usuario, email, clave)) return;

        if (this.#validar_email(email)) return;


        /* Va a registrar el usuario */
        this.auth.createUserWithEmailAndPassword(email, clave)
            .then((userCredential) => {
                var user = userCredential.user;
                localStorage.setItem("uid", user.uid);
                // console.log(user);

                alert("Usuario registrado correctamente");
            })
            .catch((error) => {
                console.log(error);
                alert("Error al registrar el usuario, verifica los datos");
                return;
            })

        this.db.collection("users").add({
            uid: user.uid,
            username: usuario,
            first: "",
            last: "",
            age: "",
            email: email,
            phone: "",
            country: "",
            city: "",
            adress: ""
        });

        this.#page(1);
    }

    close_session() {
        localStorage.removeItem("uid");

        this.#page(2);
        // console.log("Work");
        // window.location.href = "login.html";
    }

    #page(n) {
        switch (n) {
            case 1:
                document.getElementById("content").innerHTML = this.home_content;
                break;

            case 2:
                document.getElementById("content").innerHTML = this.login_content;
                break;
        }
    }

    #validar_email(email) {
        /* La variable REGEX es un tipo de validación llamado "Expresión regular" y nos ayuda a validar el formato de algo */

        const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const regex_educative = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*.edu.co$/;

        if (regex.test(email) || regex_educative.test(email)) {
            return false;
        }

        alert("El correo no es valido");
        return true;
    }

    #validar_datos_registro(usuario, email, clave) {
        var regex = /^.{6,}$/;
        var regex_user = /^.{4,}$/;
        if (usuario = "" || email == "" || clave == "") {
            alert("Por favor llene todos los campos");
            return true;
        } else if (!regex.test(clave)) {
            alert("La contraseña debe tener al menos 6 caracteres");
            return true;
        } else if (!regex_user.test(usuario)) {
            alert("El usuario debe tener al menos 4 caracteres");
            return true;
        }

        return false;
    }
}

/* Creamos el objeto de login */
var lg = new login(auth, db);


/* Funcion para loggear y registrar */
function action(n) {
    switch (n) {
        case 1:
            /* Funcion para ingresar */

            var email = document.querySelector("#email_login").value;
            var clave = document.querySelector("#password_login").value;

            lg.ingresar(email, clave);
            break;

        case 2:
            /* Funcion para registrar */

            var username = document.querySelector("#username").value;
            var email = document.querySelector("#email").value;
            var clave = document.querySelector("#password").value;

            lg.registrar(username, email, clave);
            break;

        case 3:
            /* Funcion para cerrar sesion */

            lg.close_session();
            break;
    }
}