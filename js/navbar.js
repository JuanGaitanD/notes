function navbar() {
    var navbar = document.querySelector("#navbar");
    var interaction_icon_navbar = document.querySelector("#interaction_icon_navbar");
    var navbar_title = document.querySelector("#navbar_title");
    var navbar_list = document.querySelector("#navbar_list");
    var control = document.querySelector("#control_navbar").value;

    switch (control) {
        case "0":
            navbar.style.width = "250px";
            interaction_icon_navbar.innerHTML = "close";
            navbar_title.style.display = "block";
            navbar_list.style.display = "block";

            document.querySelector("#control_navbar").value = "1";
            break;

        case "1":
            navbar.style.width = "65px";
            interaction_icon_navbar.innerHTML = "menu";
            navbar_title.style.display = "none";
            navbar_list.style.display = "none";

            document.querySelector("#control_navbar").value = "0";
            break;
    }
}

function link_navbar(n) {

    switch (n) {
        case 1:
            document.getElementById("content").innerHTML = home_content;
            /* Cargamos las notas */
            var notes = new Notes(db, localStorage.getItem("uid"));
            notes.getNotes();

            /* Aquí llenamos los apartados relativos al usuario loggeado */
            db.collection("users").where("uid", "==", localStorage.getItem("uid")).get()
            .then((querySnapshot) => {
                document.getElementById("title_name").innerHTML = querySnapshot.docs[0].data().username;
                document.getElementById("description_name").innerHTML = querySnapshot.docs[0].data().description;
                document.getElementById("description_input").value = querySnapshot.docs[0].data().description;
            })
            .catch((error) => {
                alert("Error cargando nombre de usuario" + error);
            })

            break;

        case 2:
            document.getElementById("content").innerHTML = user_content;
            load_user();

            /* Aquí llenamos los apartados relativos al usuario loggeado */
            db.collection("users").where("uid", "==", localStorage.getItem("uid")).get()
            .then((querySnapshot) => {
                document.getElementById("title_name").innerHTML = querySnapshot.docs[0].data().username;
            })
            .catch((error) => {
                alert("Error cargando nombre de usuario" + error);
            })
            break;

        case 3:
            document.getElementById("content").innerHTML = loading_content;
            
            localStorage.clear();
            setTimeout(() => {
                window.location.href = "index.html";
            }, 500);
            break;

        default:
            document.getElementById("content").innerHTML = "<h1>ERROR</h1>";
            break;
    }

    // /* Aquí llenamos los apartados relativos al usuario loggeado */
    // db.collection("users").where("uid", "==", localStorage.getItem("uid")).get()
    //     .then((querySnapshot) => {
    //         document.getElementById("title_name").innerHTML = querySnapshot.docs[0].data().username;
    //         document.getElementById("description_name").innerHTML = querySnapshot.docs[0].data().description;
    //         document.getElementById("description_input").value = querySnapshot.docs[0].data().description;
    //     })
    //     .catch((error) => {
    //         alert("Error cargando nombre de usuario" + error);
    //     })
}
