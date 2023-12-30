function nav_notes(n) {
    switch (n) {
        case 1:             
            link_navbar(2);
            break;
        
        case 2:
            location.reload();
            break;
    }
}

function add_note() {
    var title = document.getElementById("title_note").value;
    var content = document.getElementById("note_content").value;
    var color = document.getElementById("color_note").value;
    
    if (title != "" && content != "") {
        var notes = new Notes(db, localStorage.getItem("uid"));
        notes.addNote(
            title,
            content,
            color
        );

        document.getElementById("content").innerHTML = loading_content;

        setTimeout(() => {
            location.reload();
        }, 5000);
    } else {
        alert("Debes llenar el titulo y el contenido");
    }
}

function update_note() {
    const id_note = document.getElementById("id_note").value;
    var title = document.getElementById("title_note").value;
    var content = document.getElementById("note_content").value;
    var color = document.getElementById("color_note").value;

    if (id_note == "") {
        alert("Error al actualizar nota");
        console.log("Nota no encontrada");
    }


    if (title != ""){
        var notes = new Notes(db, localStorage.getItem("uid"));
        notes.updateNote(
            id_note,
            title,
            content,
            color
        );

        document.getElementById("content").innerHTML = loading_content;
        setTimeout("location.reload()", 1000);
    } else {
        alert("Debes llenar al menos el titulo :D");
    }
}

function delete_note() {
    const id_note = document.getElementById("id_note").value;

    if (id_note == "") {
        alert("Error al eliminar nota");
        console.log("Nota no encontrada");
    }

    var notes = new Notes(db, localStorage.getItem("uid"));
    notes.deleteNote(id_note);

    document.getElementById("content").innerHTML = loading_content;
    setTimeout("location.reload()", 1000);
}