const login_content = `
<main class="text-center" style="width: auto;margin-top: 150px;" id="home">
    <section><img src="assets/img/notebook_icon.png" style="width: 154px;margin: 40px;">
        <h1 class="display-5" style="font-weight: bold;">Your notes</h1>
        <p class="fw-normal text-muted" style="margin-bottom: 15px;">Log in to make your own notes! :D</p>
        
        <button class="btn btn_login" type="button" style="font-weight: bold;" onclick="nav(1)">Get In&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none">
                <path d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z" fill="currentColor"></path>
            </svg></button>
    </section>
</main>

<main class="text-center" style="width: auto;margin-top: 50px;margin-right: auto;margin-left: auto; display: none;" id="login">
    <section><img src="assets/img/notebook_icon.png" style="width: 154px;margin: 40px;">
        <article style="width: auto;margin-right: auto;margin-left: auto;background: #44664b;padding-left: 20px;padding-right: 20px;border-radius: 6px;box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.75);padding-top: 25px;padding-bottom: 25px;max-width: 400px;" class="article">
            <h1 class="display-5" style="font-weight: bold;color: white;margin-bottom: 22px;">Login</h1>
            <form class="text-center" method="post">
                <div class="mb-3">
                    <div class="input-group"><span class="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" class="fs-4">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z" fill="currentColor"></path>
                            </svg></span><input class="form-control" type="email" placeholder="Email" id="email_login" required=""></div>
                </div>
                <div class="mb-3">
                    <div class="input-group"><span class="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" class="fs-4">
                                <path d="M6 12C6 12.5523 5.55228 13 5 13C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11C5.55228 11 6 11.4477 6 12Z" fill="currentColor"></path>
                                <path d="M9 13C9.55228 13 10 12.5523 10 12C10 11.4477 9.55228 11 9 11C8.44771 11 8 11.4477 8 12C8 12.5523 8.44771 13 9 13Z" fill="currentColor"></path>
                                <path d="M14 12C14 12.5523 13.5523 13 13 13C12.4477 13 12 12.5523 12 12C12 11.4477 12.4477 11 13 11C13.5523 11 14 11.4477 14 12Z" fill="currentColor"></path>
                                <path d="M20 11H16V13H20V11Z" fill="currentColor"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M2 6C0.895431 6 0 6.89543 0 8V16C0 17.1046 0.89543 18 2 18H22C23.1046 18 24 17.1046 24 16V8C24 6.89543 23.1046 6 22 6H2ZM22 8H2L2 16H22V8Z" fill="currentColor"></path>
                            </svg></span><input class="form-control" type="password" placeholder="Password" id="password_login" required=""></div>
                </div>
                <div class="mb-3" style="margin-top: 0px;">
                <button class="btn btn_login" id="login_btn" style="font-weight: bold;">Login</button>
                <span class="btn btn_login btn_register" role="button" style="font-weight: bold;margin-left: 11px;" onclick="nav(2)">Register</span></div>
            </form>
        </article>
    </section>
</main>

<main class="text-center" style="width: auto;margin-top: 50px;margin-right: auto;margin-left: auto; display: none;" id="register">
    <section><img src="assets/img/notebook_icon.png" style="width: 154px;margin: 40px;">
        <article style="width: auto;margin-right: auto;margin-left: auto;background: #44664b;padding-left: 20px;padding-right: 20px;border-radius: 6px;box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.75);padding-top: 25px;padding-bottom: 25px;max-width: 400px;" class="article">
            <h1 class="display-5" style="font-weight: bold;color: white;margin-bottom: 22px;">Register</h1>
            <form class="text-center" method="post">
                <div class="mb-3">
                    <div class="input-group"><span class="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 24 24" width="1em" fill="currentColor" class="fs-4">
                                <path d="M0 0h24v24H0V0z" fill="none"></path>
                                <path d="M12 16c-2.69 0-5.77 1.28-6 2h12c-.2-.71-3.3-2-6-2z" opacity=".3"></path>
                                <circle cx="12" cy="8" opacity=".3" r="2"></circle>
                                <path d="M12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H6zm6-6c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"></path>
                            </svg></span><input class="form-control" type="text" placeholder="Username" id="username" required=""></div>
                </div>
                <div class="mb-3">
                    <div class="input-group"><span class="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 24 24" width="1em" fill="currentColor" class="fs-4">
                                <path d="M0 0h24v24H0V0z" fill="none"></path>
                                <path d="M20 8l-8 5-8-5v10h16zm0-2H4l8 4.99z" opacity=".3"></path>
                                <path d="M4 20h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2zM20 6l-8 4.99L4 6h16zM4 8l8 5 8-5v10H4V8z"></path>
                            </svg></span><input class="form-control" type="email" placeholder="Email" id="email" required=""></div>
                </div>
                <div class="mb-3">
                    <div class="input-group"><span class="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="1em" viewBox="0 0 24 24" width="1em" fill="currentColor" class="fs-4">
                                <g>
                                    <path d="M0,0h24v24H0V0z" fill="none"></path>
                                </g>
                                <g>
                                    <g>
                                        <path d="M2,17h20v2H2V17z M3.15,12.95L4,11.47l0.85,1.48l1.3-0.75L5.3,10.72H7v-1.5H5.3l0.85-1.47L4.85,7L4,8.47L3.15,7l-1.3,0.75 L2.7,9.22H1v1.5h1.7L1.85,12.2L3.15,12.95z M9.85,12.2l1.3,0.75L12,11.47l0.85,1.48l1.3-0.75l-0.85-1.48H15v-1.5h-1.7l0.85-1.47 L12.85,7L12,8.47L11.15,7l-1.3,0.75l0.85,1.47H9v1.5h1.7L9.85,12.2z M23,9.22h-1.7l0.85-1.47L20.85,7L20,8.47L19.15,7l-1.3,0.75 l0.85,1.47H17v1.5h1.7l-0.85,1.48l1.3,0.75L20,11.47l0.85,1.48l1.3-0.75l-0.85-1.48H23V9.22z"></path>
                                    </g>
                                </g>
                            </svg></span><input class="form-control" type="password" placeholder="Password" id="password" required=""></div>
                </div>
                <div class="mb-3" style="margin-top: 0px;"><button class="btn btn_login" type="button" style="font-weight: bold;" id="register_btn">Register</button>
                <span class="btn btn_login btn_register" role="button" style="font-weight: bold;margin-left: 11px;" onclick="nav(1)">Back</span></div>
            </form>
        </article>
    </section>
</main>
`;

const home_content = `
    <main style="">
        <aside id="home_aside">
            <main id="navbar">
                <div id="icon_navbar">
                    <span class="material-symbols-outlined" id="interaction_icon_navbar" onclick="navbar()">menu</span>
                    <input type="hidden" id="control_navbar" value="0">
                </div>

                <div id="navbar_title">
                    <img src="assets/img/YourNote_Banner.png" id="" alt="Banner" width="100%">
                </div>

                <div id="navbar_list">
                    <span onclick="link_navbar(1)">
                        <div class="navbar_item">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 24 24" width="1em" fill="currentColor" style="font-size: 24px;margin-right:10px">
                                <path d="M0 0h24v24H0V0z" fill="none"></path>
                                <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm5 15h-2v-6H9v6H7v-7.81l5-4.5 5 4.5V18z"></path>
                                <path d="M7 10.19V18h2v-6h6v6h2v-7.81l-5-4.5z" opacity=".3"></path>
                            </svg>
                            <span class="span_navbar_item">Home</span>
                        </div>
                    </span>

                    <span data-bs-target="#modal-1" data-bs-toggle="modal">
                        <div class="navbar_item">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 24 24" width="1em" fill="currentColor" style="font-size: 24px;margin-right:10px">
                                    <path d="M0 0h24v24H0V0z" fill="none"></path>
                                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
                                </svg>
                            </div>
                            <span class="span_navbar_item">Add Note</span>
                        </div>
                    </span>

                    <span onclick="link_navbar(2)">
                        <div class="navbar_item">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 24 24" width="1em" fill="currentColor" style="font-size: 24px;margin-right:10px">
                                    <path d="M0 0h24v24H0V0z" fill="none"></path>
                                    <path d="M12 16c-2.69 0-5.77 1.28-6 2h12c-.2-.71-3.3-2-6-2z" opacity=".3"></path>
                                    <circle cx="12" cy="8" opacity=".3" r="2"></circle>
                                    <path d="M12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H6zm6-6c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"></path>
                                </svg>
                            </div>
                            <span class="span_navbar_item">Acount</span>
                        </div>
                    </span>

                    <span onclick="link_navbar(3)">
                        <div class="navbar_item">
                            <div>
                                <svg class="text-muted" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="1em" viewBox="0 0 24 24" width="1em" fill="currentColor" style="font-size: 24px;margin-right:10px">
                                    <g>
                                        <path d="M0,0h24v24H0V0z" fill="none"></path>
                                    </g>
                                    <g>
                                        <path d="M5,5h7V3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h7v-2H5V5z M21,12l-4-4v3H9v2h8v3L21,12z"></path>
                                    </g>
                                </svg>
                            </div>
                            <span class="span_navbar_item">Log out</span>
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
        </aside>
        <section>
            <!-- Start: 1 Row 2 Columns -->
            <div class="container">
                <div class="row">
                    <div class="col-md-6 d-sm-flex d-md-flex d-lg-flex d-xl-flex d-xxl-flex align-self-center align-items-sm-center align-items-md-center align-items-lg-center justify-content-xl-center align-items-xl-center justify-content-xxl-start align-items-xxl-center"><img src="assets/img/notebook_icon.png" style="width: 80px;margin: 40px;margin-left: 0px;">
                        <div class="d-inline-flex flex-row justify-content-sm-center align-items-sm-center align-items-xxl-center">
                            <h1 class="display-3 d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex justify-content-center align-items-center justify-content-sm-center align-items-sm-center justify-content-md-center align-items-md-center justify-content-lg-center align-items-lg-center justify-content-xl-center align-items-xl-center justify-content-xxl-start" id="title_name">UserName</h1>
                        </div>
                    </div>
                    <div class="col-md-6 d-flex d-md-flex d-lg-flex d-xxl-flex justify-content-center align-self-center justify-content-md-end justify-content-lg-end justify-content-xxl-end"><button class="btn btn-lg d-block d-sm-block d-md-block d-lg-block d-xl-block d-xxl-flex justify-content-xxl-end btn_login" id="add_note" type="button" style="font-weight: bold;" data-bs-target="#modal-1" data-bs-toggle="modal"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 24 24" width="1em" fill="currentColor" class="fs-1">
                                <path d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
                            </svg></button></div>
                </div>
            </div><!-- End: 1 Row 2 Columns -->
            <!-- Start: 1 Row 1 Column -->
            <div class="container">
                <div class="row" style="margin: -1px;">
                    <div class="col-md-12" style="background: #d6e4d3;border-radius: 10px;box-shadow: 1px 0px 5px rgba(33,37,41,0.73);">
                        <article style="background: #d6e4d3;margin: 15px;border-radius: 10px; display:flex; items-direction: row;">
                            <p id="description_name" style="background: transparent; margin-top: .5rem; marging-bottom:.5rem">Descripción de todo lo que quieras&nbsp;&nbsp;</p>
                            <button class="btn border rounded-circle btn_view" data-bss-hover-animate="tada" id="edit_description" type="button" style="background: #d6e4d3; display: flex; align-items: top; justify-content:center;" onclick="edit_description(1)">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 24 24" width="1em" fill="currentColor" style="color: #233622;font-size: 24px;">
                                        <path d="M0 0h24v24H0V0z" fill="none"></path>
                                        <path d="M5 18.08V19h.92l9.06-9.06-.92-.92z" opacity=".3"></path>
                                        <path d="M20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83zM3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19z"></path>
                                </svg>
                            </button>
                        </article>
                        <div class="row">
                            <div class="col-12 col-md-11 col-xl-11 col-xxl-11">
                                <!-- Start: Form-Input -->
                                <div id="c_description_input" class="mb-3" style="display:none;"><small>Description :P</small>
                                    <div class="input-group"><input class="border rounded form-control InputBorder" type="text" id="description_input" placeholder="Description" required="" maxlength="100" minlength="0" style="border-bottom-color: #233622;" name="descripcion" value="Descripción de lo que quieras"></div>
                                </div><!-- End: Form-Input -->
                            </div>
                            <div class="col-2 col-md-1 col-xl-1 col-xxl-1 d-flex flex-column justify-content-center align-items-center">
                                <button class="btn btn-primary btn-sm btn_login" id="cancel_edit_description" type="button" style="font-weight: bold;background: transparent;border-style: none; display:none; margin:auto" onclick="edit_description(3)"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 24 24" width="1em" fill="currentColor" style="color: var(--bs-red);font-size: 24px;">
                                        <path d="M0 0h24v24H0V0z" fill="none" opacity=".87"></path>
                                        <path d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm5 11.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" opacity=".3"></path>
                                        <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z"></path>
                                    </svg></button></div>
                            <div class="col-9 col-md-4 col-xl-2 col-xxl-2 d-xl-flex flex-column"><button class="btn btn-primary btn_login" id="edit_description_update" type="button" style="font-weight: bold; display:none;" onclick="edit_description(2)">Update&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" class="bi bi-feather">
                                        <path d="M15.807.531c-.174-.177-.41-.289-.64-.363a3.765 3.765 0 0 0-.833-.15c-.62-.049-1.394 0-2.252.175C10.365.545 8.264 1.415 6.315 3.1c-1.95 1.686-3.168 3.724-3.758 5.423-.294.847-.44 1.634-.429 2.268.005.316.05.62.154.88.017.04.035.082.056.122A68.362 68.362 0 0 0 .08 15.198a.528.528 0 0 0 .157.72.504.504 0 0 0 .705-.16 67.606 67.606 0 0 1 2.158-3.26c.285.141.616.195.958.182.513-.02 1.098-.188 1.723-.49 1.25-.605 2.744-1.787 4.303-3.642l1.518-1.55a.528.528 0 0 0 0-.739l-.729-.744 1.311.209a.504.504 0 0 0 .443-.15c.222-.23.444-.46.663-.684.663-.68 1.292-1.325 1.763-1.892.314-.378.585-.752.754-1.107.163-.345.278-.773.112-1.188a.524.524 0 0 0-.112-.172ZM3.733 11.62C5.385 9.374 7.24 7.215 9.309 5.394l1.21 1.234-1.171 1.196a.526.526 0 0 0-.027.03c-1.5 1.789-2.891 2.867-3.977 3.393-.544.263-.99.378-1.324.39a1.282 1.282 0 0 1-.287-.018Zm6.769-7.22c1.31-1.028 2.7-1.914 4.172-2.6a6.85 6.85 0 0 1-.4.523c-.442.533-1.028 1.134-1.681 1.804l-.51.524-1.581-.25Zm3.346-3.357C9.594 3.147 6.045 6.8 3.149 10.678c.007-.464.121-1.086.37-1.806.533-1.535 1.65-3.415 3.455-4.976 1.807-1.561 3.746-2.36 5.31-2.68a7.97 7.97 0 0 1 1.564-.173Z"></path>
                                    </svg></button></div>
                        </div>
                    </div>
                </div>
            </div><!-- End: 1 Row 1 Column -->
            <!-- Start: Articles Cards -->
            <div class="container py-4 py-xl-5">
                <div class="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3" style="margin-bottom: 20px;" id="notes">
                    <div class="d-flex justify-content-center align-items-center">
                        <div class="spinner-grow text-success" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </div>
            </div><!-- End: Articles Cards -->
        </section><!-- Start: Footer Clean -->
        <footer class="text-center py-4">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <p class="text-muted my-2">Copyright&nbsp;© 2024 Juan David Gaitán Díaz</p>
                    </div>
                    <div class="col">
                        <p class="text-muted my-2"><strong>Contact:</strong> juandavidgaitandiaz@gmail.com</p>
                    </div>
                    <div class="col">
                        <p class="text-muted my-2">All rights reserved</p>
                    </div>
                </div>
            </div>
        </footer><!-- End: Footer Clean -->
    </main>
    <div class="modal fade" role="dialog" tabindex="-1" id="modal-1" style="background: #d6e4d3;backdrop-filter: opacity(0);-webkit-backdrop-filter: opacity(0);">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header" style="background: #e7eee6;border-style: none;">
                    <h4 class="modal-title">What are you thinking of? :D</h4><button class="btn-close" type="button" aria-label="Close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body" style="background: #e7eee6;">
                    <p class="text-muted" style="font-size: 14px;">Here you can create your own notes and put anything in your mind. Feel free as a bird!</p><!-- Start: 1 Row 2 Columns -->
                    <div class="container">
                        <div class="row">
                            <div class="col-md-10 col-xl-10">
                                <!-- Start: Form-Input -->
                                <div class="mb-3"><small>Title</small>
                                    <div class="input-group">
                                        <input class="form-control InputBorder" type="text" id="title_note" placeholder="Your title" required="" maxlength="100" minlength="0" style="border-bottom-color: #233622;">
                                    </div>
                                </div><!-- End: Form-Input -->
                            </div>
                            <div class="col-md-2 col-xl-2 d-xl-flex flex-column justify-content-xl-center align-items-xl-center">
                                <div id="color_picker_add_note"></div>
                                <input type="hidden" id="color_note_add" value="#82a682">
                            </div>
                        </div>
                    </div><!-- End: 1 Row 2 Columns -->
                    <textarea id="note_content" name="note" placeholder="Here you write your note, bup :P" style="width: 741px;height: 300px;margin-left: 13px;padding: 10px;padding-left: 15px;padding-right: 15px;border-radius: 8px;border-bottom-style: none;margin-bottom: -23px;"></textarea>
                </div>
                <div class="modal-footer" style="background: #e7eee6;">
                    <button class="btn btn-light" type="button" data-bs-dismiss="modal" style="background: rgb(231,238,230);border-style: none;">Noup</button>
                    <button class="btn btn-primary btn_login" type="button" style="font-weight: bold;margin-left: 10px;" onclick="add_note()">
                        Create&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" class="bi bi-feather">
                            <path d="M15.807.531c-.174-.177-.41-.289-.64-.363a3.765 3.765 0 0 0-.833-.15c-.62-.049-1.394 0-2.252.175C10.365.545 8.264 1.415 6.315 3.1c-1.95 1.686-3.168 3.724-3.758 5.423-.294.847-.44 1.634-.429 2.268.005.316.05.62.154.88.017.04.035.082.056.122A68.362 68.362 0 0 0 .08 15.198a.528.528 0 0 0 .157.72.504.504 0 0 0 .705-.16 67.606 67.606 0 0 1 2.158-3.26c.285.141.616.195.958.182.513-.02 1.098-.188 1.723-.49 1.25-.605 2.744-1.787 4.303-3.642l1.518-1.55a.528.528 0 0 0 0-.739l-.729-.744 1.311.209a.504.504 0 0 0 .443-.15c.222-.23.444-.46.663-.684.663-.68 1.292-1.325 1.763-1.892.314-.378.585-.752.754-1.107.163-.345.278-.773.112-1.188a.524.524 0 0 0-.112-.172ZM3.733 11.62C5.385 9.374 7.24 7.215 9.309 5.394l1.21 1.234-1.171 1.196a.526.526 0 0 0-.027.03c-1.5 1.789-2.891 2.867-3.977 3.393-.544.263-.99.378-1.324.39a1.282 1.282 0 0 1-.287-.018Zm6.769-7.22c1.31-1.028 2.7-1.914 4.172-2.6a6.85 6.85 0 0 1-.4.523c-.442.533-1.028 1.134-1.681 1.804l-.51.524-1.581-.25Zm3.346-3.357C9.594 3.147 6.045 6.8 3.149 10.678c.007-.464.121-1.086.37-1.806.533-1.535 1.65-3.415 3.455-4.976 1.807-1.561 3.746-2.36 5.31-2.68a7.97 7.97 0 0 1 1.564-.173Z"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" role="dialog" tabindex="-1" id="modal-2">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header" style="background: #e7eee6;border-style: none;padding-top:20px;">
                    <h4 class="modal-title">Here we go...&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20" fill="none" style="color: var(--bs-yellow);border-bottom-color: var(--bs-body-bg);">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5 2C5.55228 2 6 2.44772 6 3V4H7C7.55228 4 8 4.44772 8 5C8 5.55228 7.55228 6 7 6H6V7C6 7.55228 5.55228 8 5 8C4.44772 8 4 7.55228 4 7V6H3C2.44772 6 2 5.55228 2 5C2 4.44772 2.44772 4 3 4H4V3C4 2.44772 4.44772 2 5 2ZM5 12C5.55228 12 6 12.4477 6 13V14H7C7.55228 14 8 14.4477 8 15C8 15.5523 7.55228 16 7 16H6V17C6 17.5523 5.55228 18 5 18C4.44772 18 4 17.5523 4 17V16H3C2.44772 16 2 15.5523 2 15C2 14.4477 2.44772 14 3 14H4V13C4 12.4477 4.44772 12 5 12Z" fill="currentColor"></path>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9999 2C12.4537 2 12.8505 2.30548 12.9667 2.74411L14.1459 7.19893L17.4997 9.13381C17.8092 9.31241 17.9999 9.64262 17.9999 10C17.9999 10.3574 17.8092 10.6876 17.4997 10.8662L14.1459 12.8011L12.9667 17.2559C12.8505 17.6945 12.4537 18 11.9999 18C11.5462 18 11.1493 17.6945 11.0332 17.2559L9.85402 12.8011L6.50027 10.8662C6.19072 10.6876 6 10.3574 6 10C6 9.64262 6.19072 9.31241 6.50027 9.13382L9.85402 7.19893L11.0332 2.74411C11.1493 2.30548 11.5462 2 11.9999 2Z" fill="currentColor"></path>
                        </svg>&nbsp;</h4><button class="btn-close" type="button" aria-label="Close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body" style="background: #e7eee6;">
                    <div class="col">
                        <div class="card">
                        <div id="img_update" class="img card-img-top" style="background-color: white;">
                            <img class="card-img-top w-100 d-block fit-cover" alt="" style="height: 200px;" src="">
                        </div>
                            <div class="card-body p-4">
                                <div class="row">
                                    <input type="text" id="title_note_update" class="InputBorder col-10" placeholder="Your title" required="" maxlength="100" minlength="0" style="font-size: 24px;color: rgb(33,37,41);border-bottom-style: none;border-bottom-color: #233622; font-weight: bold;" value="Note's title">
                                
                                    <div class="col-2"><div id="color_picker_update_note"></div></div>
                                    <input type="hidden" id="color_note_update" value="#82a682">

                                    <textarea class="col" id="note_content_update" placeholder="Here you write your note, bup :P" style="width: 100%;padding: 10px;padding-left: 15px;padding-right: 15px;border-radius: 0px;background: rgb(255,255,255);border-style: none;border-bottom-style: solid;border-bottom-color: #d6e4d3;height: 300px; margin-top: 10px;" required="">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</textarea>
                                    <input type="hidden" id="id_note">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer" style="background: #e7eee6;">
                    <button class="btn btn-light d-xl-flex" type="button" data-bs-dismiss="modal" style="color: var(--bs-secondary-color);" onclick="delete_note()">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 24 24" width="1em" fill="currentColor" class="text-center text-danger" style="font-size: 22px;">
                            <path d="M0 0h24v24H0V0z" fill="none"></path>
                            <path d="M8 9h8v10H8z" opacity=".3"></path>
                            <path d="M15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z"></path>
                        </svg>
                    </button>
                    <button class="btn btn-light" type="button" data-bs-dismiss="modal">Noup</button>
                    <button class="btn btn-primary btn_login" type="button" style="font-weight: bold;margin-left: 10px;" onclick="update_note()">
                        Update&nbsp;&nbsp;
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" class="bi bi-feather">
                            <path d="M15.807.531c-.174-.177-.41-.289-.64-.363a3.765 3.765 0 0 0-.833-.15c-.62-.049-1.394 0-2.252.175C10.365.545 8.264 1.415 6.315 3.1c-1.95 1.686-3.168 3.724-3.758 5.423-.294.847-.44 1.634-.429 2.268.005.316.05.62.154.88.017.04.035.082.056.122A68.362 68.362 0 0 0 .08 15.198a.528.528 0 0 0 .157.72.504.504 0 0 0 .705-.16 67.606 67.606 0 0 1 2.158-3.26c.285.141.616.195.958.182.513-.02 1.098-.188 1.723-.49 1.25-.605 2.744-1.787 4.303-3.642l1.518-1.55a.528.528 0 0 0 0-.739l-.729-.744 1.311.209a.504.504 0 0 0 .443-.15c.222-.23.444-.46.663-.684.663-.68 1.292-1.325 1.763-1.892.314-.378.585-.752.754-1.107.163-.345.278-.773.112-1.188a.524.524 0 0 0-.112-.172ZM3.733 11.62C5.385 9.374 7.24 7.215 9.309 5.394l1.21 1.234-1.171 1.196a.526.526 0 0 0-.027.03c-1.5 1.789-2.891 2.867-3.977 3.393-.544.263-.99.378-1.324.39a1.282 1.282 0 0 1-.287-.018Zm6.769-7.22c1.31-1.028 2.7-1.914 4.172-2.6a6.85 6.85 0 0 1-.4.523c-.442.533-1.028 1.134-1.681 1.804l-.51.524-1.581-.25Zm3.346-3.357C9.594 3.147 6.045 6.8 3.149 10.678c.007-.464.121-1.086.37-1.806.533-1.535 1.65-3.415 3.455-4.976 1.807-1.561 3.746-2.36 5.31-2.68a7.97 7.97 0 0 1 1.564-.173Z"></path>
                            </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
`;

const user_content = `
<aside id="home_aside">
    <main id="navbar">
        <div id="icon_navbar">
            <span class="material-symbols-outlined" id="interaction_icon_navbar" onclick="navbar()">menu</span>
            <input type="hidden" id="control_navbar" value="0">
        </div>

        <div id="navbar_title">
            <img src="assets/img/YourNote_Banner.png" id="" alt="Banner" width="100%">
        </div>

        <div id="navbar_list">
            <span onclick="link_navbar(1)">
                <div class="navbar_item">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 24 24" width="1em" fill="currentColor" style="font-size: 24px;margin-right:10px">
                        <path d="M0 0h24v24H0V0z" fill="none"></path>
                        <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm5 15h-2v-6H9v6H7v-7.81l5-4.5 5 4.5V18z"></path>
                        <path d="M7 10.19V18h2v-6h6v6h2v-7.81l-5-4.5z" opacity=".3"></path>
                    </svg>
                    <span class="span_navbar_item">Home</span>
                </div>
            </span>

            <span data-bs-target="#modal-1" data-bs-toggle="modal">
                <div class="navbar_item">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 24 24" width="1em" fill="currentColor" style="font-size: 24px;margin-right:10px">
                            <path d="M0 0h24v24H0V0z" fill="none"></path>
                            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
                        </svg>
                    </div>
                    <span class="span_navbar_item">Add Note</span>
                </div>
            </span>

            <span onclick="link_navbar(2)">
                <div class="navbar_item">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 24 24" width="1em" fill="currentColor" style="font-size: 24px;margin-right:10px">
                            <path d="M0 0h24v24H0V0z" fill="none"></path>
                            <path d="M12 16c-2.69 0-5.77 1.28-6 2h12c-.2-.71-3.3-2-6-2z" opacity=".3"></path>
                            <circle cx="12" cy="8" opacity=".3" r="2"></circle>
                            <path d="M12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H6zm6-6c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"></path>
                        </svg>
                    </div>
                    <span class="span_navbar_item">Acount</span>
                </div>
            </span>

            <span onclick="link_navbar(3)">
                <div class="navbar_item">
                    <div>
                        <svg class="text-muted" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="1em" viewBox="0 0 24 24" width="1em" fill="currentColor" style="font-size: 24px;margin-right:10px">
                            <g>
                                <path d="M0,0h24v24H0V0z" fill="none"></path>
                            </g>
                            <g>
                                <path d="M5,5h7V3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h7v-2H5V5z M21,12l-4-4v3H9v2h8v3L21,12z"></path>
                            </g>
                        </svg>
                    </div>
                    <span class="span_navbar_item">Log out</span>
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
</aside>
<main>
    <section>
        <!-- Start: 1 Row 2 Columns -->
        <div class="container">
            <div class="row">
                <div class="col-md-6 align-self-center">
                    <div class="d-inline-flex align-items-xxl-center"><img src="assets/img/notebook_icon.png" style="width: 80px;margin: 40px;">
                        <h1 class="display-3 d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex justify-content-center align-items-center justify-content-sm-center align-items-sm-center justify-content-md-center align-items-md-center justify-content-lg-center align-items-lg-center justify-content-xl-center align-items-xl-center" id="title_name">UserName</h1>
                    </div>
                </div>
            </div>
        </div><!-- End: 1 Row 2 Columns -->
        <!-- Start: 1 Row 1 Column -->
        <div class="container" id="container">
            <div class="row" style="margin: -1px;">
                <div class="col-md-12" style="background: #d6e4d3;border-radius: 10px;box-shadow: 1px 0px 5px rgba(33,37,41,0.73);">
                    <article style="background: #d6e4d3;margin: 15px;border-radius: 10px;">
                        <p style="background: transparent;">You can edit your information here :D<br>Whatever you want!&nbsp;</p>
                    </article>
                </div>
                <div class="col-md-12" style="background: #d6e4d3;border-radius: 10px;box-shadow: 1px 0px 5px rgba(33,37,41,0.73);margin-top: 30px;">
                    <h1 style="margin-top: 10px;">User</h1>
                    <div class="row">
                        <div class="col-md-4">
                            <!-- Start: Form-Input -->
                            <div class="mb-3"><small>User name</small>
                                <div class="input-group"><span class="bg-white input-group-text InputBorder"><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="1em" viewBox="0 0 24 24" width="1em" fill="currentColor">
                                            <g>
                                                <rect fill="none" height="24" width="24"></rect>
                                            </g>
                                            <g>
                                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20z"></path>
                                            </g>
                                        </svg></span><input class="form-control InputBorder" type="text" id="username_usuario" placeholder="Username" disabled="" name="username_usuario"></div>
                            </div><!-- End: Form-Input -->
                            <!-- Start: Form-Input -->
                            <div class="mb-3"><small>First Name</small>
                                <div class="input-group"><span class="bg-white input-group-text InputBorder"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 24 24" width="1em" fill="currentColor">
                                            <path d="M0 0h24v24H0z" fill="none"></path>
                                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                                        </svg></span><input class="form-control InputBorder" type="text" id="nombre_usuario" placeholder="First Name" disabled=""></div>
                            </div><!-- End: Form-Input -->
                            <!-- Start: Form-Input -->
                            <div class="mb-3"><small>Phone</small>
                                <div class="input-group"><span class="bg-white input-group-text InputBorder"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 24 24" width="1em" fill="currentColor">
                                            <path d="M0 0h24v24H0z" fill="none"></path>
                                            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path>
                                        </svg></span><input class="form-control InputBorder" type="tel" id="phone_usuario" placeholder="300-000-000" disabled=""></div>
                            </div><!-- End: Form-Input -->
                            <!-- Start: Form-Input -->
                            <div class="mb-3"><small>Adress</small>
                                <div class="input-group"><span class="bg-white input-group-text InputBorder"><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="1em" viewBox="0 0 24 24" width="1em" fill="currentColor">
                                            <g>
                                                <rect fill="none" height="24" width="24"></rect>
                                            </g>
                                            <g>
                                                <path d="M19,9.3V4h-3v2.6L12,3L2,12h3v8h5v-6h4v6h5v-8h3L19,9.3z M10,10c0-1.1,0.9-2,2-2s2,0.9,2,2H10z"></path>
                                            </g>
                                        </svg></span><input class="form-control InputBorder" type="text" id="adress_usuario" placeholder="Adress" disabled=""></div>
                            </div><!-- End: Form-Input -->
                        </div>
                        <div class="col-md-4">
                            <!-- Start: Form-Input -->
                            <div class="mb-3"><small>Email</small>
                                <div class="input-group"><span class="bg-white input-group-text InputBorder"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" class="bi bi-envelope-fill">
                                            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"></path>
                                        </svg></span><input class="form-control InputBorder" type="email" id="correo_usuario" placeholder="Email" disabled=""></div>
                            </div><!-- End: Form-Input -->
                            <!-- Start: Form-Input -->
                            <div class="mb-3"><small>Last name</small>
                                <div class="input-group"><span class="bg-white input-group-text InputBorder"><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="1em" viewBox="0 0 24 24" width="1em" fill="currentColor">
                                            <g>
                                                <rect fill="none" height="24" width="24"></rect>
                                            </g>
                                            <g>
                                                <g>
                                                    <path d="M18.39,14.56C16.71,13.7,14.53,13,12,13c-2.53,0-4.71,0.7-6.39,1.56C4.61,15.07,4,16.1,4,17.22V20h16v-2.78 C20,16.1,19.39,15.07,18.39,14.56z"></path>
                                                    <path d="M9.78,12h4.44c1.21,0,2.14-1.06,1.98-2.26l-0.32-2.45C15.57,5.39,13.92,4,12,4S8.43,5.39,8.12,7.29L7.8,9.74 C7.64,10.94,8.57,12,9.78,12z"></path>
                                                </g>
                                            </g>
                                        </svg></span><input class="form-control InputBorder" type="text" id="apellido_usuario" placeholder="Last name" disabled=""></div>
                            </div><!-- End: Form-Input -->
                            <!-- Start: Form-Input -->
                            <div class="mb-3"><small>Country</small>
                                <div class="input-group">
                                    <span class="bg-white input-group-text InputBorder"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 24 24" width="1em" fill="currentColor">
                                            <path d="M0 0h24v24H0z" fill="none"></path>
                                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
                                        </svg>
                                    </span> 
                                    <select id="country_usuario" class="form-select InputBorder" placeholder="Country" disabled></select>
                                </div>
                            </div><!-- End: Form-Input -->
                        </div>
                        <div class="col-md-4">
                            <!-- Start: Form-Input -->
                            <div class="mb-3"><small>Password</small>
                                <div class="input-group"><span class="bg-white input-group-text InputBorder"><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="1em" viewBox="0 0 24 24" width="1em" fill="currentColor">
                                            <g>
                                                <path d="M0,0h24v24H0V0z" fill="none"></path>
                                            </g>
                                            <g>
                                                <g>
                                                    <path d="M2,17h20v2H2V17z M3.15,12.95L4,11.47l0.85,1.48l1.3-0.75L5.3,10.72H7v-1.5H5.3l0.85-1.47L4.85,7L4,8.47L3.15,7l-1.3,0.75 L2.7,9.22H1v1.5h1.7L1.85,12.2L3.15,12.95z M9.85,12.2l1.3,0.75L12,11.47l0.85,1.48l1.3-0.75l-0.85-1.48H15v-1.5h-1.7l0.85-1.47 L12.85,7L12,8.47L11.15,7l-1.3,0.75l0.85,1.47H9v1.5h1.7L9.85,12.2z M23,9.22h-1.7l0.85-1.47L20.85,7L20,8.47L19.15,7l-1.3,0.75 l0.85,1.47H17v1.5h1.7l-0.85,1.48l1.3,0.75L20,11.47l0.85,1.48l1.3-0.75l-0.85-1.48H23V9.22z"></path>
                                                </g>
                                            </g>
                                        </svg></span><input class="form-control InputBorder" type="password" id="password_usuario" placeholder="******" disabled=""></div>
                            </div><!-- End: Form-Input -->
                            <!-- Start: Form-Input -->
                            <div class="mb-3"><small>Age</small>
                                <div class="input-group"><span class="bg-white input-group-text InputBorder"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 24 24" width="1em" fill="currentColor">
                                            <path d="M0 0h24v24H0z" fill="none"></path>
                                            <path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"></path>
                                        </svg></span><input class="form-control InputBorder" type="number" id="age_usuario" placeholder="Age" disabled=""></div>
                            </div><!-- End: Form-Input -->
                            <!-- Start: Form-Input -->
                            <div class="mb-3"><small>City</small>
                                <div class="input-group"><span class="bg-white input-group-text InputBorder"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 24 24" width="1em" fill="currentColor">
                                            <path d="M0 0h24v24H0z" fill="none"></path>
                                            <path d="M12 2c-4.97 0-9 4.03-9 9 0 4.17 2.84 7.67 6.69 8.69L12 22l2.31-2.31C18.16 18.67 21 15.17 21 11c0-4.97-4.03-9-9-9zm0 2c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.3c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path>
                                        </svg></span><input class="form-control InputBorder" type="text" id="city_usuario" placeholder="City" disabled=""></div>
                            </div><!-- End: Form-Input -->
                        </div>
                    </div>
                    <div class="row" id="edit_usuario" style="margin-top: 10px;margin-bottom: 10px;">
                        <div class="col"><button class="btn btn-primary btn_login" type="button" style="font-weight: bold;margin-left: 0px;margin-right: 0px;width: 100%;" onclick="edit_user(1)">Edit&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" class="bi bi-feather">
                                    <path d="M15.807.531c-.174-.177-.41-.289-.64-.363a3.765 3.765 0 0 0-.833-.15c-.62-.049-1.394 0-2.252.175C10.365.545 8.264 1.415 6.315 3.1c-1.95 1.686-3.168 3.724-3.758 5.423-.294.847-.44 1.634-.429 2.268.005.316.05.62.154.88.017.04.035.082.056.122A68.362 68.362 0 0 0 .08 15.198a.528.528 0 0 0 .157.72.504.504 0 0 0 .705-.16 67.606 67.606 0 0 1 2.158-3.26c.285.141.616.195.958.182.513-.02 1.098-.188 1.723-.49 1.25-.605 2.744-1.787 4.303-3.642l1.518-1.55a.528.528 0 0 0 0-.739l-.729-.744 1.311.209a.504.504 0 0 0 .443-.15c.222-.23.444-.46.663-.684.663-.68 1.292-1.325 1.763-1.892.314-.378.585-.752.754-1.107.163-.345.278-.773.112-1.188a.524.524 0 0 0-.112-.172ZM3.733 11.62C5.385 9.374 7.24 7.215 9.309 5.394l1.21 1.234-1.171 1.196a.526.526 0 0 0-.027.03c-1.5 1.789-2.891 2.867-3.977 3.393-.544.263-.99.378-1.324.39a1.282 1.282 0 0 1-.287-.018Zm6.769-7.22c1.31-1.028 2.7-1.914 4.172-2.6a6.85 6.85 0 0 1-.4.523c-.442.533-1.028 1.134-1.681 1.804l-.51.524-1.581-.25Zm3.346-3.357C9.594 3.147 6.045 6.8 3.149 10.678c.007-.464.121-1.086.37-1.806.533-1.535 1.65-3.415 3.455-4.976 1.807-1.561 3.746-2.36 5.31-2.68a7.97 7.97 0 0 1 1.564-.173Z"></path>
                                </svg></button></div>
                    </div>
                    <div class="row" id="btn_user_actions" style="margin-top: 10px;margin-bottom: 10px;display:none;">
                        <div class="col"><button class="btn btn-primary btn_login" type="button" style="font-weight: bold;margin-left: 0px;margin-right: 0px;width: 100%;" onclick="update_userlog()">Save&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" class="bi bi-feather">
                                    <path d="M15.807.531c-.174-.177-.41-.289-.64-.363a3.765 3.765 0 0 0-.833-.15c-.62-.049-1.394 0-2.252.175C10.365.545 8.264 1.415 6.315 3.1c-1.95 1.686-3.168 3.724-3.758 5.423-.294.847-.44 1.634-.429 2.268.005.316.05.62.154.88.017.04.035.082.056.122A68.362 68.362 0 0 0 .08 15.198a.528.528 0 0 0 .157.72.504.504 0 0 0 .705-.16 67.606 67.606 0 0 1 2.158-3.26c.285.141.616.195.958.182.513-.02 1.098-.188 1.723-.49 1.25-.605 2.744-1.787 4.303-3.642l1.518-1.55a.528.528 0 0 0 0-.739l-.729-.744 1.311.209a.504.504 0 0 0 .443-.15c.222-.23.444-.46.663-.684.663-.68 1.292-1.325 1.763-1.892.314-.378.585-.752.754-1.107.163-.345.278-.773.112-1.188a.524.524 0 0 0-.112-.172ZM3.733 11.62C5.385 9.374 7.24 7.215 9.309 5.394l1.21 1.234-1.171 1.196a.526.526 0 0 0-.027.03c-1.5 1.789-2.891 2.867-3.977 3.393-.544.263-.99.378-1.324.39a1.282 1.282 0 0 1-.287-.018Zm6.769-7.22c1.31-1.028 2.7-1.914 4.172-2.6a6.85 6.85 0 0 1-.4.523c-.442.533-1.028 1.134-1.681 1.804l-.51.524-1.581-.25Zm3.346-3.357C9.594 3.147 6.045 6.8 3.149 10.678c.007-.464.121-1.086.37-1.806.533-1.535 1.65-3.415 3.455-4.976 1.807-1.561 3.746-2.36 5.31-2.68a7.97 7.97 0 0 1 1.564-.173Z"></path>
                                </svg></button></div>
                        <div class="col"><button class="btn btn-primary btn_login" type="button" style="font-weight: bold;margin-left: 0px;margin-right: 0px;width: 100%;background: transparent;color: #233622;border-style: none;" onclick="edit_user(2)">Cancel</button></div>
                    </div>
                </div>
            </div>
        </div><!-- End: 1 Row 1 Column -->
    </section><!-- Start: Footer Clean -->
    <footer class="text-center py-4" style="position: sticky;">
        <div class="container">
            <div class="row">
                <div class="col">
                    <p class="text-muted my-2">Copyright&nbsp;© 2024 Juan David Gaitán Díaz</p>
                </div>
                <div class="col">
                    <p class="text-muted my-2"><strong>Contact:</strong> juandavidgaitandiaz@gmail.com</p>
                </div>
                <div class="col">
                    <p class="text-muted my-2">All rights reserved</p>
                </div>
            </div>
        </div>
    </footer><!-- End: Footer Clean -->
</main>
`;

const loading_content = `
<div class="d-flex justify-content-center align-items-center" style="margin-top: 400px">
    <div class="spinner-grow text-success" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
</div>
`;