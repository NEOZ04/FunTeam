import Backend from "../../Backend";

class User {
    constructor() {
        this._db = Backend.db().ref('users');
    }

    getUsers(cb) {
        this._db.on('value', snap => {
            return cb(snap.val());
        })
    }

    getUser(id, cb){
        this._db.on('value', snap => {
            cb(snap.val()[id]);
        })
    }

}

export default new User;