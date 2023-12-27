class Notes{
    constructor(db, uid) {
        this.db = db;
        this.uid = uid;
        this.collection_uid = 'notes_' + this.uid;
        this.i = 0;
    }

    addNote(title, content, color) {
        /* Verificamos que exista la colección y el documento de indice */
        var ref_i = this.db.collection(this.collection_uid).doc("i");

        ref_i.get().then((doc) => {
            if (!doc.exists) {
                this.db.collection(this.collection_uid).doc("i").set({
                    i: 0
                })
                .then((doc) => {
                    this.i = doc.data().i;
                })
            } else {
                this.db.collection(this.collection_uid).doc("i").update({
                    i: doc.data().i + 1
                })
                .then((doc) => {
                    this.i = doc.data().i;
                })
            }
        })
        .catch((error) => {
            console.log("Error getting i:", error);
        });


        /* Agregamos la nota */
        this.db.collection(this.collection_uid).doc().set({
            i: this.i,
            date: new Date(),
            title: title,
            content: content,
            color: color
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
                    note.id = doc.id;
                    
                    var img = document.createElement("div");
                    img.id = "img";
                    img.style.background = doc.data().color;

                    var note_content = document.createElement("div");
                    note_content.className = "content_note";

                    var title = document.createElement("h2");
                    title.innerHTML = doc.data().title;

                    var text_note = document.createElement("div");
                    text_note.className = "text_note";
                    var p_text = document.createElement("p");
                    p_text.innerHTML = doc.data().content;

                    var span_edit_note = document.createElement("span");
                    span_edit_note.className = "material-symbols-outlined";
                    span_edit_note.innerHTML = "edit";
                    span_edit_note.id = "span_edit_note";

                    text_note.appendChild(p_text);
                    note_content.appendChild(title);
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