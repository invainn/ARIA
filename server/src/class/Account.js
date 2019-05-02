const db = require('../db');

class Account {
    constructor(data) {
        this.Update(data);
    }

    // id is defaulted to undefined since knex detects undefined fields and sets them to default (need a fix around this)
    Update({ id = 0, type = 0, password, first_name, last_name, email }) {
        this.id = id;
        this.type = type;
        this.password = password;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;

        return this;
    }

    async Save() {
        try {
            const data = await db.from('Account').insert({
                ...this,
                id: undefined,
            });

            return this.Update(data);
        } catch(err) {
            console.error(err);
        }
    }
}

module.exports = Account;