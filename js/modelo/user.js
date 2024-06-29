class user{
    constructor(auth, db){
        this.auth = auth;
        this.db = db;
        this.note = "note_"+localStorage.getItem("uid");
    }

    update_user(uid, username, first, last, age, phone, country, city, adress){
        /* We don't update the uid, neither the email and password */
        /* We use uid for get the user */
        this.db.collection("users").doc(uid).update({
            username: username,
            first: first,
            last: last,
            age: age,
            phone: phone,
            country: country,
            city: city,
            adress: adress
        })
        .then(() => {
            alert("User updated succesfully");
            document.getElementById("container").innerHTML = "<h1>Updating user...</h1>";
            setTimeout(() => {
                location.reload();
            }, 2000);
        })
        .catch((error) => {
            console.error("Error updating document: ", error);
        })
    }
}

// this.db.collection("users").add({
//     uid: user.uid,
//     username: usuario,
//     first: "",
//     last: "",
//     age: "",
//     email: email,
//     phone: "",
//     country: "",
//     city: "",
//     adress: ""
// })