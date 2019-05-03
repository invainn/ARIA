const db = require('../db');
const router = require('express').Router();
const knex = require('knex');

const Student = require('../class/Student');

// GET /customer/teacher (Get all Teachers)
router.get('/teacher', async (req, res) => {
    if (req.user.type !== 0) {
        res.status(401).send();
    }

    const query = await db.from("Account").select('id', 'first_name', 'last_name').where('type', 1);

    res.status(200).send(query);
});

// GET /customer/participant (Get all participants)
router.get('/participant', async (req, res) => {
    if (req.user.type !== 0) {
        res.status(401).send();
    }

    const query = await db
                        .from('Student AS S')
                        .innerJoin('Account AS A', 'S.CustomerID', 'A.id')
                        .innerJoin('Account AS B', 'S.TeacherID', 'B.id')
                        .select('S.FirstName', 'S.LastName', knex.raw(`CONCAT("B"."first_name", ' ', "B"."last_name") AS "TeacherName"`));

    res.status(200).send(query);
});

// POST /customer/participant (Add new participant)
router.post('/participant', async (req, res) => {
    if (req.user.type !== 0) {
        res.status(401).send();
    }

    console.log(req.body);

    await (new Student(req.body)).Save();

    res.status(200).send('Added new participant!');
});

module.exports = router;
