function page(){
    if (localStorage.getItem("uid")) {
        document.getElementById("content").innerHTML = home_content;
        // alert("home");
    } else {
        document.getElementById("content").innerHTML = login_content;
    }
};

window.onload = page() 