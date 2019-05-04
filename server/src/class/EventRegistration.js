const db = require('../db');

class EventRegistration {
    constructor(data) {
        this.Update(data);
    }

    // id is defaulted to undefined since knex detects undefined fields and sets them to default (need a fix around this)
    Update({ ID = 0, StudentID, EventID }) {
        this.ID = ID;
        this.StudentID = StudentID;
        this.EventID = EventID;

        return this;
    }

    async Save() {
        try {
            const data = await db.from('EventRegistration').insert({
                ...this,
                ID: undefined,
            });

            return this;
        } catch(err) {
            console.error(err);
        }
    }
}

module.exports = EventRegistration;
