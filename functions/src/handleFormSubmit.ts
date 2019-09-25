const Busboy = require('busboy');
const cors = require('cors');
const fs = require('fs');
const STORAGE_BUCKET_URL = require('./constants').STORAGE_BUCKET_URL;

// TODO This should be in own file, because it would be used accross
// all functions
const whitelist = [
  'http://localhost:8000',
  'https://dp.school',
  'https://dpschool.io',
  'https://digitalproductschool.io',
  'https://dps-website-staging-0.appspot.com',
];
const corsOptions = {
  origin: (origin: string, callback: any) => {
    if (whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

const corsFn = cors(corsOptions);

// busboy is a middleware to collect multipart/form-data
// it is finished once all file readstreams have been processed
// we have two options: either upload to cloud while reading the stream
// or read the stream and return it as binary to other function that
// could save it to the cloud. Currently, we read the stream & directly
// save / pipe to the cloud storage. This means the functions have two
// responsibilities: getting all key: value pairs and at the same time
// piping files to the storage.
exports.getRequestDataAndPersistFiles = async (
  req: any,
  database: any
): Promise<any> => {
  return new Promise((resolve, reject) => {
    const busboy = new Busboy({ headers: req.headers });
    const data: { [key: string]: string | Buffer | Promise<any> } = {};
    // collect file stream and pipe them to the storage, return promises as values
    busboy.on(
      'file',
      async (fieldname: string, readFileStream: any, filename: string) => {
        const filePromise = new Promise(async (fileResolve, fileReject) => {
          const bucket = STORAGE_BUCKET_URL;
          const name = `batch-${data.batch}/applications/${data.name}/${
            data.email
          }/${Date.now()}_${filename}`;
          const file = {
            bucket,
            name,
          };

          const bucketFile = await database
            .storage()
            .bucket(file.bucket)
            .file(file.name);

          const writeStream = bucketFile.createWriteStream({ gzip: true });
          readFileStream.pipe(writeStream);

          writeStream.on('error', (e: any) => fileReject(e));
          writeStream.on('finish', () => {
            fileResolve(file);
            writeStream.end();
          });
        });

        data[fieldname] = filePromise;
      }
    );

    // collect key/value pairs
    busboy.on('field', (name: string, val: string) => {
      data[name] = val;
    });

    // resolve or reject
    busboy.on('finish', () => resolve(data));
    busboy.on('error', reject);
    busboy.end(req.rawBody);
  });
};

exports.handler = function(request: any, response: any, database: any) {
  return corsFn(request, response, async () => {
    if (request.query.keepHot) {
      response.sendStatus(200);
      return;
    }

    const data = await exports.getRequestDataAndPersistFiles(request, database);
    const cvPromise = data['cv'] || Promise.resolve(null);
    const coverLetterPromise = data['coverLetter'] || Promise.resolve(null);

    try {
      const [cv, coverLetter] = await Promise.all([
        cvPromise,
        coverLetterPromise,
      ]);

      await database
        .firestore()
        .collection('batches')
        .doc(`batch-${data.batch}`)
        .collection('applications')
        .add({
          ...data,
          cv,
          coverLetter,
        });

      response.status(200).send('Thank you for your application!');
    } catch (e) {
      console.log(e);
      console.log(e.message);

      response
        .status(500)
        .send(
          'We are sorry. Something went wrong. Please contact hello@dpschool.io'
        );
    }
  });
};
