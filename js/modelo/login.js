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
                // var user_data = JSON.stringify(user);
                // console.log(user.uid);
                localStorage.setItem("uid", user.uid);
            })
            .catch((error) => {
                alert("Usuario o contraseña incorrectos");
                console.log(error);
                document.querySelector("#email_login").value = "";
                document.querySelector("#password_login").value = "";
                return;
            })

        this.#page(1000);
    }

    registrar(usuario, email, clave,) {
        /* Validación de datos */
        if (this.#validar_datos_registro(usuario, email, clave)) return;

        if (this.#validar_email(email)) return;

        /* Va a registrar el usuario */
        this.auth.createUserWithEmailAndPassword(email, clave)
            .then((userCredential) => {
                var user = userCredential.user;
                // console.log(user);

                /* Guardamos los datos del usuario en la base de datos */
                this.db.collection("users").doc(user.uid).set({
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
                })
                .catch((error) => {
                    console.log(error);
                    alert("Error al registrar el usuario - DB - " + error);
                })

                alert("Usuario registrado correctamente, puedes ingresar ahora");
                document.getElementById("register_user").style.display = "block";
                this.#page(3000);
            })
            .catch((error) => {
                console.log(error);
                alert("Error al registrar el usuario, verifica los datos");
                return;
            })
    }

    close_session() {
        localStorage.clear();
        setTimeout(() => {
            window.location.href = "index.html";
        }, 500);
    }

    #page(n) {
        setTimeout(() => {
            window.location.href = "index.html";
        }, n);       
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