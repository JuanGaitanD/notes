function nav_notes(n) {
    switch (n) {
        case 1: 
            document.getElementById("main").innerHTML = add_note_content;
            document.getElementById("add_note").style.display = "none";
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

        alert("Nota agregada correctamente");
        setTimeout(() => {
            location.reload();
        }, 500);
    } else {
        alert("Debes llenar el titulo y el contenido");
    }
}