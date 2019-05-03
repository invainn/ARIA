const db = require('../db');

class Student {
    constructor(data) {
        this.Update(data);
    }

    // id is defaulted to undefined since knex detects undefined fields and sets them to default (need a fix around this)
    Update({ ID = 0, FirstName, LastName, TeacherID, CustomerID }) {
        this.ID = ID;
        this.FirstName = FirstName; 
        this.LastName = LastName; 
        this.CustomerID = CustomerID;
        this.TeacherID = TeacherID;

        return this;
    }

    async Save() {
        try {
            const data = await db.from('Student').insert({
                ...this,
                ID: undefined,
            });

            return this;
        } catch(err) {
            console.error(err);
        }
    }
}

module.exports = Student;
