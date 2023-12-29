const login_content = `
<section>
<div class="container" id="container">
    <div id="home">
        <center><img src="img/notebook_icon.png" alt="notebook_icon" width="100px" style="margin-bottom: 10px;">
        </center>

        <h1>Your notes</h1>
        <p>Login in to make your notes</p>

        <center>
            <button class="btn button_login" onclick="nav(1)">Login</button>
        </center>
    </div>

    <div id="login" class="hide">
        <center><img src="img/notebook_icon.png" alt="notebook_icon" width="100px" style="margin-bottom: 10px;">
        </center>

        <h1>Login</h1>
        <br>

        <div id="form">
            <input type="text" id="email_login" class="form-control" placeholder="Email" required>
            <input type="password" id="password_login" class="form-control" placeholder="Password" required>
            <button class="btn button_login" onclick="action(1)">Login</button>
            <button class="btn" onclick="nav(2)" style="color: #e7eee6">Register</button>
        </div>
    </div>

    <div id="register" class="hide">
        <center><img src="img/notebook_icon.png" alt="notebook_icon" width="100px" style="margin-bottom: 10px;">
        </center>

        <h1>Register</h1>
        <br>

        <div id="form">
            <input type="text" id="username" class="form-control" placeholder="Username" required>
            <input type="email" id="email" class="form-control" placeholder="Email" required>
            <input type="password" id="password" class="form-control" placeholder="Password" required>
            <button class="btn button_login" onclick="action(2)">Register</button>
            <button class="btn" onclick="nav(1)" style="color: #e7eee6">Back</button>
        </div>
        <center><p id="register_user" style="display: none">Ahora puedes ingresar con tu correo y contraseña</p></center>
    </div>
</div>
</section>
`;

const home_content = `
<section id="home_section">
<div class="container">
    <header>
        <div id="name">
            <img src="img/notebook_icon.png" alt="notebook_icon">
            <h1 id="title_name"></h1>
        </div>
        <div class="description" id="description">
            <p id="description_name"></p>

            <div id="c_description_input" class="form-floating hide">
                <input type="text" id="description_input" class="form-control" placeholder="Description">
                <label for="description_input">Description</label>
            </div>

            <span class="material-symbols-outlined" id="edit_description" onclick="edit_description(1)">edit</span>

            <span class="material-symbols-outlined" id="cancel_edit_description" onclick="edit_description(3)" style="display: none">cancel</span>

            <button id="edit_description_update" class="btn button_login" onclick="edit_description(2)">Actualizar</button>
        </div>
    </header>

    <main id="main">
        <div id="notes">
            <div></div>
            <center>
                <h1 style="color: #e7eee6;">No hay notas</h1>
            </center>
        </div>
    </main>

    <div>
        <button class="btn button_login" id="add_note" onclick="nav_notes(1)">
            <li class="material-symbols-outlined">add</li>
        </button>
    </div>
</div>
</section>


<aside id="home_aside">
    <main id="navbar">
        <div id="icon_navbar">
            <span class="material-symbols-outlined" id="interaction_icon_navbar" onclick="navbar()">menu</span>
            <input type="hidden" id="control_navbar" value="0">
        </div>

        <div id="navbar_title">
            <div id="name">
                <!-- <img src="" alt="Icon"> -->
                <h1 id="nombre_navbar">Your Notes</h1>
            </div>
        </div>

        <div id="navbar_list">
            <span onclick="link_navbar(1)">
                <div class="navbar_item">
                    <div>
                        <span class="material-symbols-outlined icon_list">
                            home
                        </span>
                    </div>
                    <span class="span_navbar_item">Home</span>
                </div>
            </span>

            <span onclick="link_navbar(2)">
                <div class="navbar_item">
                    <div>
                        <span class="material-symbols-outlined icon_list">
                            add
                        </span>
                    </div>
                    <span class="span_navbar_item">Add Note</span>
                </div>
            </span>

            <span onclick="link_navbar(3)">
                <div class="navbar_item">
                    <div>
                        <span class="material-symbols-outlined icon_list">
                            account_circle
                        </span>
                    </div>
                    <span class="span_navbar_item">Acount</span>
                </div>
            </span>

            <!-- <span onclick="link_navbar(n)">
                    <div class="navbar_item">
                        <div>
                            <span class="material-symbols-outlined icon_list">
                                home
                            </span>
                        </div>
                        <span class="span_navbar_item">Option</span>
                    </div>
                </span> -->
        </div>
    </main>

    <div>
        <button class="btn button_login" id="cerrar_session" onclick="action(3)">Cerrar sesión</button>
    </div>
</aside>
`;

const note_content = `
<section id="home_section">
    <div class="container">
    <header>
        <div id="name">
            <img src="img/notebook_icon.png" alt="notebook_icon">
            <h1 id="title_name"></h1>
        </div>
        <div class="description" id="description">
            <p id="description_name"></p>

            <div id="c_description_input" class="form-floating hide">
                <input type="text" id="description_input" class="form-control" placeholder="Description">
                <label for="description_input">Description</label>
            </div>

            <span class="material-symbols-outlined" id="edit_description" onclick="edit_description(1)">edit</span>

            <span class="material-symbols-outlined" id="cancel_edit_description" onclick="edit_description(3)" style="display: none">cancel</span>

            <button id="edit_description_update" class="btn button_login" onclick="edit_description(2)">Actualizar</button>
        </div>
    </header>

        <main>
            <div id="nota">
                <div id="nota_title">
                    <h2>Titulo</h2>
                </div>

                <div id="nota_content">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur itaque ea facilis
                        aspernatur dolores tempora laboriosam optio architecto exercitationem commodi
                        consequatur
                        voluptates, eligendi fugit aut libero debitis voluptatibus! Animi repellat nobis ratione
                        quam dolores sit porro odit temporibus labore adipisci, repellendus suscipit fuga ipsam
                        architecto vitae harum voluptas. Ipsam, atque. Ea iste, natus hic consequuntur in
                        quaerat
                        reprehenderit! Iste, quas voluptatem fuga assumenda sed neque perferendis obcaecati!
                        Consectetur sunt harum eligendi commodi libero, nisi molestiae, excepturi dignissimos
                        beatae
                        explicabo, magnam qui placeat vero reprehenderit nesciunt veritatis recusandae dicta
                        quam
                        rerum ut officia et doloribus pariatur. Placeat inventore officiis totam nesciunt?</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur itaque ea facilis
                        aspernatur dolores tempora laboriosam optio architecto exercitationem commodi
                        consequatur
                        voluptates, eligendi fugit aut libero debitis voluptatibus! Animi repellat nobis ratione
                        quam dolores sit porro odit temporibus labore adipisci, repellendus suscipit fuga ipsam
                        architecto vitae harum voluptas. Ipsam, atque. Ea iste, natus hic consequuntur in
                        quaerat
                        reprehenderit! Iste, quas voluptatem fuga assumenda sed neque perferendis obcaecati!
                        Consectetur sunt harum eligendi commodi libero, nisi molestiae, excepturi dignissimos
                        beatae
                        explicabo, magnam qui placeat vero reprehenderit nesciunt veritatis recusandae dicta
                        quam
                        rerum ut officia et doloribus pariatur. Placeat inventore officiis totam nesciunt?</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur itaque ea facilis
                        aspernatur dolores tempora laboriosam optio architecto exercitationem commodi
                        consequatur
                        voluptates, eligendi fugit aut libero debitis voluptatibus! Animi repellat nobis ratione
                        quam dolores sit porro odit temporibus labore adipisci, repellendus suscipit fuga ipsam
                        architecto vitae harum voluptas. Ipsam, atque. Ea iste, natus hic consequuntur in
                        quaerat
                        reprehenderit! Iste, quas voluptatem fuga assumenda sed neque perferendis obcaecati!
                        Consectetur sunt harum eligendi commodi libero, nisi molestiae, excepturi dignissimos
                        beatae
                        explicabo, magnam qui placeat vero reprehenderit nesciunt veritatis recusandae dicta
                        quam
                        rerum ut officia et doloribus pariatur. Placeat inventore officiis totam nesciunt?</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur itaque ea facilis
                        aspernatur dolores tempora laboriosam optio architecto exercitationem commodi
                        consequatur
                        voluptates, eligendi fugit aut libero debitis voluptatibus! Animi repellat nobis ratione
                        quam dolores sit porro odit temporibus labore adipisci, repellendus suscipit fuga ipsam
                        architecto vitae harum voluptas. Ipsam, atque. Ea iste, natus hic consequuntur in
                        quaerat
                        reprehenderit! Iste, quas voluptatem fuga assumenda sed neque perferendis obcaecati!
                        Consectetur sunt harum eligendi commodi libero, nisi molestiae, excepturi dignissimos
                        beatae
                        explicabo, magnam qui placeat vero reprehenderit nesciunt veritatis recusandae dicta
                        quam
                        rerum ut officia et doloribus pariatur. Placeat inventore officiis totam nesciunt?</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur itaque ea facilis
                        aspernatur dolores tempora laboriosam optio architecto exercitationem commodi
                        consequatur
                        voluptates, eligendi fugit aut libero debitis voluptatibus! Animi repellat nobis ratione
                        quam dolores sit porro odit temporibus labore adipisci, repellendus suscipit fuga ipsam
                        architecto vitae harum voluptas. Ipsam, atque. Ea iste, natus hic consequuntur in
                        quaerat
                        reprehenderit! Iste, quas voluptatem fuga assumenda sed neque perferendis obcaecati!
                        Consectetur sunt harum eligendi commodi libero, nisi molestiae, excepturi dignissimos
                        beatae
                        explicabo, magnam qui placeat vero reprehenderit nesciunt veritatis recusandae dicta
                        quam
                        rerum ut officia et doloribus pariatur. Placeat inventore officiis totam nesciunt?</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur itaque ea facilis
                        aspernatur dolores tempora laboriosam optio architecto exercitationem commodi
                        consequatur
                        voluptates, eligendi fugit aut libero debitis voluptatibus! Animi repellat nobis ratione
                        quam dolores sit porro odit temporibus labore adipisci, repellendus suscipit fuga ipsam
                        architecto vitae harum voluptas. Ipsam, atque. Ea iste, natus hic consequuntur in
                        quaerat
                        reprehenderit! Iste, quas voluptatem fuga assumenda sed neque perferendis obcaecati!
                        Consectetur sunt harum eligendi commodi libero, nisi molestiae, excepturi dignissimos
                        beatae
                        explicabo, magnam qui placeat vero reprehenderit nesciunt veritatis recusandae dicta
                        quam
                        rerum ut officia et doloribus pariatur. Placeat inventore officiis totam nesciunt?</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur itaque ea facilis
                        aspernatur dolores tempora laboriosam optio architecto exercitationem commodi
                        consequatur
                        voluptates, eligendi fugit aut libero debitis voluptatibus! Animi repellat nobis ratione
                        quam dolores sit porro odit temporibus labore adipisci, repellendus suscipit fuga ipsam
                        architecto vitae harum voluptas. Ipsam, atque. Ea iste, natus hic consequuntur in
                        quaerat
                        reprehenderit! Iste, quas voluptatem fuga assumenda sed neque perferendis obcaecati!
                        Consectetur sunt harum eligendi commodi libero, nisi molestiae, excepturi dignissimos
                        beatae
                        explicabo, magnam qui placeat vero reprehenderit nesciunt veritatis recusandae dicta
                        quam
                        rerum ut officia et doloribus pariatur. Placeat inventore officiis totam nesciunt?</p>
                </div>
            </div>


            <div id="btn_actions">
                <center>
                    <button class="btn button_login">Editar</button>
                    <button class="btn">Eliminar</button>
                </center>
            </div>
        </main>
    </div>
</section>


<aside id="home_aside">
    <main id="navbar">
        <div id="icon_navbar">
            <span class="material-symbols-outlined" id="interaction_icon_navbar" onclick="navbar()">menu</span>
            <input type="hidden" id="control_navbar" value="0">
        </div>

        <div id="navbar_title">
            <div id="name">
                <!-- <img src="" alt="Icon"> -->
                <h1 id="nombre_navbar">Your Notes</h1>
            </div>
        </div>

        <div id="navbar_list">
            <span onclick="link_navbar(1)">
                <div class="navbar_item">
                    <div>
                        <span class="material-symbols-outlined icon_list">
                            home
                        </span>
                    </div>
                    <span class="span_navbar_item">Home</span>
                </div>
            </span>

            <span onclick="link_navbar(2)">
                <div class="navbar_item">
                    <div>
                        <span class="material-symbols-outlined icon_list">
                            add
                        </span>
                    </div>
                    <span class="span_navbar_item">Add Note</span>
                </div>
            </span>

            <span onclick="link_navbar(3)">
                <div class="navbar_item">
                    <div>
                        <span class="material-symbols-outlined icon_list">
                            account_circle
                        </span>
                    </div>
                    <span class="span_navbar_item">Acount</span>
                </div>
            </span>

            <!-- <span onclick="link_navbar(n)">
                    <div class="navbar_item">
                        <div>
                            <span class="material-symbols-outlined icon_list">
                                home
                            </span>
                        </div>
                        <span class="span_navbar_item">Option</span>
                    </div>
                </span> -->
        </div>
    </main>

    <div>
        <button class="btn button_login" id="cerrar_session" onclick="action(3)">Cerrar sesión</button>
    </div>
</aside>
`;

const user_content = `
<section id="home_section">
<div class="container">
    <header>
        <div id="name">
            <img src="img/notebook_icon.png" alt="notebook_icon">
            <h1 id="title_name"></h1>
        </div>
        <div class="description" id="description">
            <p>En este espacio podrás ver, editar y borrar tu cuenta. Lo que tu desees.</p>

            <p id="description_name" class="hide"></p>
            <div id="c_description_input" class="form-floating hide">
                <input type="text" id="description_input" class="form-control" placeholder="Description">
                <label for="description_input">Description</label>
            </div>
        </div>
    </header>

    <main>
        <div class="description">
            <h2>Datos del usuario</h2>
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;">
                <div class="form-floating">
                    <input type="text" id="username_usuario" class="form-control" placeholder="Username" disabled>
                    <label for="username_usuario">Username</label>
                </div>

                <div class="form-floating">
                    <input type="email" id="correo_usuario" class="form-control" placeholder="Email" disabled>
                    <label for="correo_usuario">Email</label>
                </div>

                <div class="form-floating">
                    <input type="password" id="password_usuario" class="form-control" placeholder="Password" disabled>
                    <label for="password_usuario">Password</label>
                </div>

                <div class="form-floating">
                    <input type="text" id="nombre_usuario" class="form-control" placeholder="First name" disabled>
                    <label for="nombre_usuario">First name</label>
                </div>

                <div class="form-floating">
                    <input type="text" id="apellido_usuario" class="form-control" placeholder="Last name" disabled>
                    <label for="apellido_usuario">Last name</label>
                </div>

                <div class="form-floating">
                    <input type="number" id="age_usuario" class="form-control" placeholder="Age" min="1" disabled>
                    <label for="age_usuario">Age</label>
                </div>

                <div class="form-floating">
                    <input type="tel" id="phone_usuario" class="form-control" placeholder="Phone" disabled>
                    <label for="phone_usuario">Phone</label>
                </div>

                <div class="form-floating">
                    <select id="country_usuario" class="form-select" disabled>
                        <option value=""></option>
                        <option value="otro">Otro</option>
                    </select>
                    <label for="country_usuario">Country</label>
                </div>

                <div class="form-floating">
                    <select id="city_usuario" class="form-select" disabled>
                        <option value=""></option>
                        <option value="otro">Otro</option>
                    </select>
                    <label for="city_usuario">City</label>
                </div>

                <div class="form-floating">
                    <input type="text" id="adress_usuario" class="form-control" placeholder="Adress" disabled>
                    <label for="adress_usuario">Adress</label>
                </div>
            </div>
            <br>
            
            <button class="btn button_login" id="edit_usuario" style="width: 100%" onclick="edit_user(1)">Editar</button>
            <div id="btn_user_actions" style="display: none; grid-template-columns: 1fr 1fr; gap: 20px;">
                <button class="btn button_login" onclick="update_userlog()">Save</button>
                <button class="btn" onclick="edit_user(2)">Cancel</button>
            </div>
        </div>
    </main>
</div>
</section>


<aside id="home_aside">
    <main id="navbar">
        <div id="icon_navbar">
            <span class="material-symbols-outlined" id="interaction_icon_navbar" onclick="navbar()">menu</span>
            <input type="hidden" id="control_navbar" value="0">
        </div>

        <div id="navbar_title">
            <div id="name">
                <!-- <img src="" alt="Icon"> -->
                <h1 id="nombre_navbar">Your Notes</h1>
            </div>
        </div>

        <div id="navbar_list">
            <span onclick="link_navbar(1)">
                <div class="navbar_item">
                    <div>
                        <span class="material-symbols-outlined icon_list">
                            home
                        </span>
                    </div>
                    <span class="span_navbar_item">Home</span>
                </div>
            </span>

            <span onclick="link_navbar(2)">
                <div class="navbar_item">
                    <div>
                        <span class="material-symbols-outlined icon_list">
                            add
                        </span>
                    </div>
                    <span class="span_navbar_item">Add Note</span>
                </div>
            </span>

            <span onclick="link_navbar(3)">
                <div class="navbar_item">
                    <div>
                        <span class="material-symbols-outlined icon_list">
                            account_circle
                        </span>
                    </div>
                    <span class="span_navbar_item">Acount</span>
                </div>
            </span>

            <!-- <span onclick="link_navbar(n)">
                    <div class="navbar_item">
                        <div>
                            <span class="material-symbols-outlined icon_list">
                                home
                            </span>
                        </div>
                        <span class="span_navbar_item">Option</span>
                    </div>
                </span> -->
        </div>
    </main>

    <div>
        <button class="btn button_login" id="cerrar_session" onclick="action(3)">Cerrar sesión</button>
    </div>
</aside>
`;

const add_note_content = `
<section id="home_section">
<div class="container">
    <header>
        <div id="name">
            <img src="img/notebook_icon.png" alt="notebook_icon">
            <h1 id="title_name"></h1>
        </div>
        <div class="description" id="description">
            <p id="description_name"></p>

            <div id="c_description_input" class="form-floating hide">
                <input type="text" id="description_input" class="form-control" placeholder="Description">
                <label for="description_input">Description</label>
            </div>

            <span class="material-symbols-outlined" id="edit_description" onclick="edit_description(1)">edit</span>

            <span class="material-symbols-outlined" id="cancel_edit_description" onclick="edit_description(3)" style="display: none">cancel</span>

            <button id="edit_description_update" class="btn button_login" onclick="edit_description(2)">Actualizar</button>
        </div>
    </header>

    <main id="main">
    <h1>Agrega tu nota!</h1>
    <div id="nota">
        <div style="display: grid; grid-template-columns: 1.5fr .5fr">
            <div class="form-floating" style="width: 500px;">
                <input type="text" id="title_note" class="form-control" placeholder="Title">
                <label for="title_note">Title</label>
            </div>
            <div style="display: grid; align-content: center;">
                <input type="color" class="form-control" id="color_note" value="#233622">
            </div>
        </div>
        <hr>

        <div class="form-floating">
            <textarea class="form-control" placeholder="Escribe tu nota ✨" id="note_content"></textarea>
            <label for="note_content">Nota</label>
        </div>
        <input type="hidden" id="id_note" value="">
    </div>


    <div id="btn_actions">
        <button class="btn button_login" id="btn_add_note" onclick="add_note()">Agregar</button>

        <button class="btn button_login" id="btn_update_note" onclick="update_note()" style="display: none">Actualizar</button>

        <button class="btn" id="btn_delete_note" onclick="delete_note()" style="background-color: red; color: white; display: none;">Eliminar</button>
        <button class="btn" onclick="nav_notes(2)">Cancelar</button>
    </div>
    </main>

    <div>
        <button class="btn button_login" id="add_note" onclick="nav_notes(1)">
            <li class="material-symbols-outlined">add</li>
        </button>
    </div>
</div>
</section>


<aside id="home_aside">
    <main id="navbar">
        <div id="icon_navbar">
            <span class="material-symbols-outlined" id="interaction_icon_navbar" onclick="navbar()">menu</span>
            <input type="hidden" id="control_navbar" value="0">
        </div>

        <div id="navbar_title">
            <div id="name">
                <!-- <img src="" alt="Icon"> -->
                <h1 id="nombre_navbar">Your Notes</h1>
            </div>
        </div>

        <div id="navbar_list">
            <span onclick="link_navbar(1)">
                <div class="navbar_item">
                    <div>
                        <span class="material-symbols-outlined icon_list">
                            home
                        </span>
                    </div>
                    <span class="span_navbar_item">Home</span>
                </div>
            </span>

            <span onclick="link_navbar(2)">
                <div class="navbar_item">
                    <div>
                        <span class="material-symbols-outlined icon_list">
                            add
                        </span>
                    </div>
                    <span class="span_navbar_item">Add Note</span>
                </div>
            </span>

            <span onclick="link_navbar(3)">
                <div class="navbar_item">
                    <div>
                        <span class="material-symbols-outlined icon_list">
                            account_circle
                        </span>
                    </div>
                    <span class="span_navbar_item">Acount</span>
                </div>
            </span>

            <!-- <span onclick="link_navbar(n)">
                    <div class="navbar_item">
                        <div>
                            <span class="material-symbols-outlined icon_list">
                                home
                            </span>
                        </div>
                        <span class="span_navbar_item">Option</span>
                    </div>
                </span> -->
        </div>
    </main>

    <div>
        <button class="btn button_login" id="cerrar_session" onclick="action(3)">Cerrar sesión</button>
    </div>
</aside>
`;