class Notes{
    constructor(db, uid) {
        this.db = db;
        this.uid = uid;
        this.collection_uid = 'notes_' + this.uid;
    }

    addNote(title, content, color) {
        /* Agregamos la nota */
        this.db.collection(this.collection_uid).add({
            date: new Date(),
            title: title,
            content: content,
            color: color
        })
        .then(() => {
            alert("Nota agregada correctamente");
        })
        .catch((error) => {
            alert("Error agregando nota a la nubesita: " + error);
        })
    }

    updateNote(id_note, title, content, color) {
        this.db.collection(this.collection_uid).doc(id_note).update({
            title: title,
            content: content,
            color: color
        })
        .then(() => {
            alert("Nota actualizada correctamente");
        })
        .catch((error) => {
            alert("Error actualizando nota: " + error);
        })
    }

    deleteNote(id_note) {
        this.db.collection(this.collection_uid).doc(id_note).delete();

        this.db.collection(this.collection_uid).orderBy("i").get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                if (doc.data().i > id_note) {
                    this.db.collection(this.collection_uid).doc(doc.i).update({
                        i: doc.data().i - 1
                    })
                }
            })
        })
        .catch((error) => {
            alert("Error eliminando nota: " + error);
        })
    }

    getNotes() {
        this.db.collection(this.collection_uid).orderBy("date").get()
        .then((querySnapshot) => {
            if(!querySnapshot.empty){
                document.getElementById("notes").innerHTML = "";
                querySnapshot.forEach((doc) => {
                    var note = document.createElement("div");
                    note.className = "note";
                    
                    var img = document.createElement("div");
                    img.id = "img";
                    img.style.background = doc.data().color;

                    var note_content = document.createElement("div");
                    note_content.className = "content_note";

                    var title_note = document.createElement("div");
                    title_note.className = "title_note";

                    var title = document.createElement("h2");
                    title.innerHTML = doc.data().title;
                    title_note.appendChild(title);

                    var text_note = document.createElement("div");
                    text_note.className = "text_note";
                    var p_text = document.createElement("p");
                    p_text.innerHTML = doc.data().content;

                    var span_edit_note = document.createElement("span");
                    span_edit_note.className = "material-symbols-outlined";
                    span_edit_note.innerHTML = "visibility";
                    span_edit_note.id = "span_edit_note";
                    span_edit_note.addEventListener("click", () => {
                        /* Ponemos la vista de agregar notas */
                        document.getElementById("content").innerHTML = add_note_content;

                        /* Ponemos los datos de la nota en los campos */
                        document.getElementById("title_note").value = doc.data().title;
                        document.getElementById("note_content").value = doc.data().content;
                        document.getElementById("color_note").value = doc.data().color;

                        /* Ponemos los botones de actualizar y eliminar nota */
                        document.getElementById("btn_add_note").style.display = "none";
                        document.getElementById("btn_update_note").style.display = "block";
                        document.getElementById("btn_delete_note").style.display = "block";
                        
                        document.getElementById("id_note").value = doc.id;
                    })

                    text_note.appendChild(p_text);
                    note_content.appendChild(title_note);
                    note_content.appendChild(text_note);

                    note.appendChild(img);
                    note.appendChild(note_content);
                    note.appendChild(span_edit_note);

                    document.getElementById("notes").appendChild(note);
                })
            } else {
                alert("No hay notas");
            }
        })
    }
}