var user_uid = localStorage.getItem("uid");
var user_log = new user(auth, db);

function edit_user(n) {
    switch (n) {
        case 1:
            document.getElementById("username_usuario").disabled = false;
            document.getElementById("nombre_usuario").disabled = false;
            document.getElementById("apellido_usuario").disabled = false;
            document.getElementById("age_usuario").disabled = false;
            document.getElementById("phone_usuario").disabled = false;
            document.getElementById("country_usuario").disabled = false;
            document.getElementById("city_usuario").disabled = false;
            document.getElementById("adress_usuario").disabled = false;
            document.getElementById("edit_usuario").style.display = "none";
            document.getElementById("btn_user_actions").style.display = "grid";
            break;

        case 2:
            document.getElementById("username_usuario").disabled = true;
            document.getElementById("nombre_usuario").disabled = true;
            document.getElementById("apellido_usuario").disabled = true;
            document.getElementById("age_usuario").disabled = true;
            document.getElementById("phone_usuario").disabled = true;
            document.getElementById("country_usuario").disabled = true;
            document.getElementById("city_usuario").disabled = true;
            document.getElementById("adress_usuario").disabled = true;
            document.getElementById("edit_usuario").style.display = "block";
            document.getElementById("btn_user_actions").style.display = "none";
            break;
    }
}

function update_userlog() {
    var username = document.getElementById("username_usuario").value;
    var nombre = document.getElementById("nombre_usuario").value;
    var apellido = document.getElementById("apellido_usuario").value;
    var age = document.getElementById("age_usuario").value;
    var phone = document.getElementById("phone_usuario").value;
    var country = document.getElementById("country_usuario").value;
    var city = document.getElementById("city_usuario").value;
    var adress = document.getElementById("adress_usuario").value;

    if (username == "" || nombre == "" || apellido == "" || age == "" || phone == "" || country == "" || city == "" || adress == "") {
        alert("Debes rellenar todos los datos");
        return;
    }

    user_log.update_user(user_uid, username, nombre, apellido, age, phone, country, city, adress);
}

function load_user() {
    db.collection("users").doc(user_uid).get()
        .then((doc) => {
            document.getElementById("username_usuario").value = doc.data().username;
            document.getElementById("correo_usuario").value = doc.data().email;
            document.getElementById("password_usuario").value = "********";
            document.getElementById("nombre_usuario").value = doc.data().first;
            document.getElementById("apellido_usuario").value = doc.data().last;
            document.getElementById("age_usuario").value = doc.data().age;
            document.getElementById("phone_usuario").value = doc.data().phone;
            document.getElementById("country_usuario").value = doc.data().country;
            document.getElementById("city_usuario").value = doc.data().city;
            document.getElementById("adress_usuario").value = doc.data().adress;
        })
        .catch((error) => {
            alert("error cargando los datos del usuario" + error);
        })
}

/* Edit de description */
function edit_description(n) {
    const description_name = document.querySelector("#description_name");
    const c_description_input = document.querySelector("#c_description_input");
    const description_input = document.querySelector("#description_input");
    const edit_description = document.querySelector("#edit_description");
    const cancel_edit_description = document.querySelector("#cancel_edit_description");
    const edit_description_update = document.querySelector("#edit_description_update");

    switch (n) {
        case 1:
            /* Edit description */
            description_name.style.display = "none";
            edit_description.style.display = "none";

            c_description_input.style.display = "block";
            cancel_edit_description.style.display = "grid";
            edit_description_update.style.display = "block";
            break;

        case 2:
            /* Save edit */
            if(description_input.value == "" || description_input.value == null || description_input.value == undefined) {
                alert("Agrega una descripción :D");
                return;
            }

            db.collection("users").doc(user_uid).update({
                description: description_input.value
            })
            .then(() => {
                alert("Descripción actualizada");
                description_name.innerHTML = description_input.value;
            })
            .catch((error) => {
                alert("Error al actualizar la descripción" + error);
            })

            description_name.style.display = "block";
            edit_description.style.display = "grid";

            c_description_input.style.display = "none";
            cancel_edit_description.style.display = "none";
            edit_description_update.style.display = "none";
            break;

        case 3:
            /* Cancel edit */
            description_name.style.display = "block";
            edit_description.style.display = "grid";

            c_description_input.style.display = "none";
            cancel_edit_description.style.display = "none";
            edit_description_update.style.display = "none";
            break;
    }
}