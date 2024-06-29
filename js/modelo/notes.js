class Notes {
    constructor(db, uid, username) {
        this.db = db;
        this.uid = uid;
        this.username = username;
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
        this.db.collection(this.collection_uid).orderBy("date", "desc").get()
            .then((querySnapshot) => {
                if (!querySnapshot.empty) {
                    document.getElementById("notes").innerHTML = "";
                    querySnapshot.forEach((doc) => {
                        /* 
                        <div class="col">
                            <div class="card">
                                <div class="img card-img-top" style="background-color: blue;">
                                    <img class="card-img-top w-100 d-block fit-cover" alt="IMG" style="height: 200px;" src="">
                                </div>
                                <div class="card-body p-4">
                                    <h4 class="card-title">Note's title</h4>
                                    <p class="card-text">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
                                    <div class="d-flex" style="padding-left: 50px;padding-right: 50px;">
                                        <button class="btn border rounded-circle btn_view" data-bss-hover-animate="tada" type="button" data-bs-target="#modal-2" data-bs-toggle="modal" style="width: 48px;height: 48px;margin-top: 24px;margin-bottom: 24px;background: #d6e4d3;">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 24 24" width="1em" fill="currentColor" style="color: #233622;font-size: 24px;">
                                                <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                <path d="M12 6c-3.79 0-7.17 2.13-8.82 5.5C4.83 14.87 8.21 17 12 17s7.17-2.13 8.82-5.5C19.17 8.13 15.79 6 12 6zm0 10c-2.48 0-4.5-2.02-4.5-4.5S9.52 7 12 7s4.5 2.02 4.5 4.5S14.48 16 12 16z" opacity=".3"></path>
                                                <path d="M12 4C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 13c-3.79 0-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6s7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17zm0-10c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7zm0 7c-1.38 0-2.5-1.12-2.5-2.5S10.62 9 12 9s2.5 1.12 2.5 2.5S13.38 14 12 14z"></path>
                                            </svg>
                                        </button>
                                        <div class="d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex d-xxl-flex flex-column justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-center justify-content-xl-center justify-content-xxl-center align-items-xxl-start" style="margin-left: 20px;">
                                            <p class="fw-bold mb-0 title_name">Username</p>
                                            <p class="text-muted mb-0" style="padding-left: 0px;margin-left: 0px;">Rol</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        */

                        var col = document.createElement("div");    
                        col.className = "col";

                        var card = document.createElement("div");
                        card.className = "card";

                        var contenedor_IMG = document.createElement("div");
                        contenedor_IMG.className = "img card-img-top";
                        contenedor_IMG.style.background = doc.data().color;

                        var img = document.createElement("img");
                        img.className = "card-img-top w-100 d-block fit-cover";
                        img.style.display = "none";
                        img.alt = "";
                        img.style.height = "200px";
                        img.src = "";

                        contenedor_IMG.appendChild(img);

                        var card_body = document.createElement("div");
                        card_body.className = "card-body p-4";

                        var title = document.createElement("h4");
                        title.className = "card-title";
                        title.innerHTML = doc.data().title;

                        var text = document.createElement("p");
                        text.className = "card-text";
                        text.innerHTML = doc.data().content;

                        var contenedor_actions = document.createElement("div"); 
                        contenedor_actions.className = "d-flex";
                        contenedor_actions.style.paddingLeft = "50px";
                        contenedor_actions.style.paddingRight = "50px";

                            var btn_view = document.createElement("button");
                            btn_view.className = "btn border rounded-circle btn_view";
                            btn_view.setAttribute("data-bss-hover-animate", "tada");
                            btn_view.type = "button";
                            btn_view.setAttribute("data-bs-target", "#modal-2");
                            btn_view.setAttribute("data-bs-toggle", "modal");
                            btn_view.style.width = "48px";
                            btn_view.style.height = "48px";
                            btn_view.style.marginTop = "24px";
                            btn_view.style.marginBottom = "24px";
                            btn_view.style.background = "#d6e4d3";
                            
                            btn_view.addEventListener("click", () => {

                                /* Ponemos los datos de la nota en los campos */
                                document.getElementById("title_note_update").value = doc.data().title;
                                document.getElementById("note_content_update").value = doc.data().content;
                                document.getElementById("color_note_update").value = doc.data().color;
                                document.getElementById("img_update").style = "background-color: " + doc.data().color;
                                document.getElementsByClassName("pcr-button")[1].style = "--pcr-color: " + doc.data().color;

                                /* Guardamos el ID de la nota para su posterior uso */
                                document.getElementById("id_note").value = doc.id;
                            });
                            
                            btn_view.innerHTML = `
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 24 24" width="1em" fill="currentColor" style="color: #233622;font-size: 24px;">
                                    <path d="M0 0h24v24H0V0z" fill="none"></path>
                                    <path d="M12 6c-3.79 0-7.17 2.13-8.82 5.5C4.83 14.87 8.21 17 12 17s7.17-2.13 8.82-5.5C19.17 8.13 15.79 6 12 6zm0 10c-2.48 0-4.5-2.02-4.5-4.5S9.52 7 12 7s4.5 2.02 4.5 4.5S14.48 16 12 16z" opacity=".3"></path>
                                    <path d="M12 4C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 13c-3.79 0-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6s7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17zm0-10c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7zm0 7c-1.38 0-2.5-1.12-2.5-2.5S10.62 9 12 9s2.5 1.12 2.5 2.5S13.38 14 12 14z"></path>
                                </svg>
                            `;

                            
                            var contenedor_datos = document.createElement("div");
                            contenedor_datos.className = "d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex d-xxl-flex flex-column justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-center justify-content-xl-center justify-content-xxl-center align-items-xxl-start";
                            contenedor_datos.style.marginLeft = "20px";

                            var p_name = document.createElement("p");
                            p_name.className = "fw-bold mb-0 title_name";
                            p_name.innerHTML = this.username;
                            
                            var p_creator = document.createElement("p");
                            p_creator.className = "text-muted mb-0";
                            p_creator.style.paddingLeft = "0px";
                            p_creator.style.marginLeft = "0px";
                            p_creator.innerHTML = "Creator";
                            
                            contenedor_datos.appendChild(p_name);
                            contenedor_datos.appendChild(p_creator);
                            
                        contenedor_actions.appendChild(btn_view);
                        contenedor_actions.appendChild(contenedor_datos);

                        card_body.appendChild(title);
                        card_body.appendChild(text);
                        card_body.appendChild(contenedor_actions);

                        card.appendChild(contenedor_IMG);
                        card.appendChild(card_body);

                        col.appendChild(card);

                        document.getElementById("notes").appendChild(col);


                        /* ******** */
                        /* Versión 1.0 */

                        // var note = document.createElement("div");
                        // note.className = "note";

                        // var img = document.createElement("div");
                        // img.id = "img";
                        // img.style.background = doc.data().color;

                        // var note_content = document.createElement("div");
                        // note_content.className = "content_note";

                        // var title_note = document.createElement("div");
                        // title_note.className = "title_note";

                        // var title = document.createElement("h2");
                        // title.innerHTML = doc.data().title;
                        // title_note.appendChild(title);

                        // var text_note = document.createElement("div");
                        // text_note.className = "text_note";
                        // var p_text = document.createElement("p");
                        // p_text.innerHTML = doc.data().content;

                        // var span_edit_note = document.createElement("span");
                        // span_edit_note.className = "material-symbols-outlined";
                        // span_edit_note.innerHTML = "visibility";
                        // span_edit_note.id = "span_edit_note";
                        // span_edit_note.addEventListener("click", () => {
                        //     /* Ponemos la vista de agregar notas */
                        //     document.getElementById("content").innerHTML = add_note_content;

                        //     /* Ponemos los datos de la nota en los campos */
                        //     document.getElementById("title_note").value = doc.data().title;
                        //     document.getElementById("note_content").value = doc.data().content;
                        //     document.getElementById("color_note").value = doc.data().color;

                        //     /* Ponemos los botones de actualizar y eliminar nota */
                        //     document.getElementById("btn_add_note").style.display = "none";
                        //     document.getElementById("btn_update_note").style.display = "block";
                        //     document.getElementById("btn_delete_note").style.display = "block";

                        //     /* Guardamos el ID de la nota para su posterior uso */
                        //     /* Ocultamos el boton de agregar nota */
                        //     document.getElementById("id_note").value = doc.id;
                        //     document.getElementById("add_note").display = "none";

                        //     /* Aquí llenamos los apartados relativos al usuario loggeado */
                        //     db.collection("users").where("uid", "==", localStorage.getItem("uid")).get()
                        //         .then((querySnapshot) => {
                        //             document.getElementById("title_name").innerHTML = querySnapshot.docs[0].data().username;
                        //             document.getElementById("description_name").innerHTML = querySnapshot.docs[0].data().description;
                        //             document.getElementById("description_input").value = querySnapshot.docs[0].data().description;
                        //         })
                        //         .catch((error) => {
                        //             alert("Error cargando nombre de usuario" + error);
                        //         })
                        // })

                        // /* Unimos los elementos creados */
                        // text_note.appendChild(p_text);
                        // note_content.appendChild(title_note);
                        // note_content.appendChild(text_note);

                        // note.appendChild(img);
                        // note.appendChild(note_content);
                        // note.appendChild(span_edit_note);

                        // document.getElementById("notes").appendChild(note);
                    })
                } else {
                    alert("No hay notas");
                    document.getElementById("notes").innerHTML = `
                        <div></div>
                        <center><h1 style="color: #e7eee6;">No hay notas</h1></center>
                    `;
                }
            })
    }
}