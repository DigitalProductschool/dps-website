jest.mock('cors');
const testEnv = require('firebase-functions-test')(
  {
    projectId: 'dps-website-staging-0',
  },
  './dps-website-staging.firebase.key.json'
);

const cors = require('cors');
cors.mockImplementation(options => (req, res, fn) => fn());
const assert = require('assert');
const handleFormSubmit = require('../lib/handleFormSubmit');
const handleFormSubmitHandler = handleFormSubmit.handler;
const admin = require('firebase-admin');

admin.initializeApp();

describe('handle form submission', () => {
  it('saves user data', async done => {
    const req = {
      body: {
        name: 'Max',
        userType: 'student',
        email: 'example@gmail.com',
        batch: 9,
        scholarship: 'true',
        consent: 'true',
        track: 'se',
        source: 'Facebook',
      },
    };

    handleFormSubmit.getRequestDataAndPersistFiles = jest.fn(() => req.body);

    const res = {
      status: (...args) => res,
      send: async message => {
        assert.equal(message, 'Thank you for your application!');
        const doc = await admin
          .firestore()
          .collection('batches')
          .doc('batch-9')
          .collection('applications')
          .where('name', '==', 'Max')
          .get();

        assert.equal(doc.size, 1);

        for (let d of doc.docs) {
          await admin
            .firestore()
            .collection('batches')
            .doc('batch-9')
            .collection('applications')
            .doc(d.id)
            .delete();
        }

        handleFormSubmit.getRequestDataAndPersistFiles.mockRestore();
        done();
      },
    };

    handleFormSubmitHandler(req, res, admin);
  });
});
