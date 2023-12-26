class user{
    constructor(auth, db){
        this.auth = auth;
        this.db = db;
        this.note = "note_"+localStorage.getItem("uid");
    }
}