const router = require('express').Router();
const moment = require('moment-timezone');

const db = require('../db');
const Event = require('../class/Event');

// POST Event (Create an Event)
router.post('/event', async (req, res) => {
    if (req.user.type !== 2) {
        res.status(401).send();
    }

    await (new Event(req.body)).Save();

    res.status(200).send('Event created successfully!');
});

// POST Documents (Download documents)
router.post('/documents', async (req, res) => {
    const AWS = require('aws-sdk');
    const archiver = require('archiver');
    const s3 = new AWS.S3();

    AWS.config.update({
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY, 
    });

    const archive = archiver('zip', {
        zlib: { level: 9 } // Sets the compression level.
    });

    // Iterate through the object and add files to the archive that are needed
    const documents = req.body;
    Object.entries(documents).forEach(([form, wanted]) => {
        if (wanted) {
            // TODO: change key to form name associated with file
            // after more documents are implemented
            const options = {
                Bucket: 's3ariannmta',
                Key: 'announcing_sheet.docx',
            };

            // and create read streams from them
            const file = s3.getObject(options).createReadStream();

            archive.append(file, { name: `${form}.docx` });
        }
    });

    // Tell archive that we're finished adding files
    archive.finalize();

    // TODO: Attach festival name to this?
    // Attach with this name
    res.attachment(`${moment().format('MM_DD_YYYY')}_nnmta_documents.zip`);

    // Write zip to client
    archive.pipe(res);
});

module.exports = router;
