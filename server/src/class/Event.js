const db = require('../db');
const moment = require('moment-timezone');

class Event {
    constructor(data) {
        this.Update(data);
    }

    // id is defaulted to undefined since knex detects undefined fields and sets them to default (need a fix around this)
    Update({
        ID = 0,
        Name,
        StartDate,
        EndDate,
        Address,
        ChairEmail,
        City,
        State,
        Zipcode,
        HasCommandPerformance,
        CommandPerformanceName = '',
        HasJudging,
        StudentMultipleLevels,
        StudentStartDate,
        StudentEndDate,
        TeacherStartDate,
        TeacherEndDate,
    }) {
        this.ID = ID;
        this.Name = Name;
        this.StartDate = StartDate;
        this.EndDate = EndDate;
        this.Address = Address;
        this.ChairEmail = ChairEmail;
        this.City = City;
        this.State = State;
        this.Zipcode = Zipcode;
        this.HasCommandPerformance = HasCommandPerformance;
        this.HasJudging = HasJudging;
        this.StudentMultipleLevels = StudentMultipleLevels;
        this.StudentStartDate = StudentStartDate;
        this.StudentEndDate = StudentEndDate;
        this.TeacherStartDate = TeacherStartDate;
        this.TeacherEndDate = TeacherEndDate;
        this.CommandPerformanceName = CommandPerformanceName;

        return this;
    }

    async Save() {
        try {
            const data = await db.from('Event').insert({
                ...this,
                ID: undefined,
            });

            return this;
        } catch(err) {
            console.error(err);
        }
    }
}

module.exports = Event;
