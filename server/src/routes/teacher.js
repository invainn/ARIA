const db = require('../db');
const router = require('express').Router();

// GET /teacher/student (Get all Students under teacher)
router.get('/student', async (req, res) => {
    if (req.user.type !== 1) {
        res.status(401).send();
    }

    const query = await db
                        .from('Student AS s')
                        .select('*')
                        .where('s.TeacherID', req.user.id);

    res.status(200).send(query);
});

// GET /teacher/student/registered (Get all Students under teacher that are registered for an event)
router.get('/student/registered', async (req, res) => {
    if (req.user.type !== 1) {
        res.status(401).send();
    }

    const query = await db
                        .from('Student AS s')
                        .innerJoin('EventRegistration AS er', 'er.StudentID', 's.ID')
                        .innerJoin('Event AS e', 'e.ID', 'er.EventID')
                        .select('s.FirstName', 's.LastName', 'e.Name as EventName')
                        .where('s.TeacherID', req.user.id);

    console.log(query);
    res.status(200).send(query);
});

module.exports = router;
