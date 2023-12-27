function page() {
    /* Valida que se tenga un uid de sessión */
    if (localStorage.getItem("uid")) {
        /* Si exite un UID en la sessión, valida que exista también en la base de datos. Si no existe, le devuelve al login */
        db.collection("users").where("uid", "==", localStorage.getItem("uid")).get()
            .then((querySnapshot) => {
                if (querySnapshot.empty) {
                    alert("Usuario no encontrado");
                    localStorage.clear();
                    document.getElementById("content").innerHTML = login_content;
                } else {
                    document.getElementById("content").innerHTML = home_content;
                    document.getElementById("title_name").innerHTML = querySnapshot.docs[0].data().username;
                    document.getElementById("description_name").innerHTML = querySnapshot.docs[0].data().description;
                    document.getElementById("description_input").value = querySnapshot.docs[0].data().description;

                    /* Cargamos las notas */
                    var notes = new Notes(db, localStorage.getItem("uid"));
                    notes.getNotes();
                }
            })
            .catch((error) => {
                alert("Usuario no encontrado" + error);
                localStorage.clear();
                document.getElementById("content").innerHTML = login_content;
            })
    } else {
        localStorage.clear();
        document.getElementById("content").innerHTML = login_content;
    }
};

window.onload = page();