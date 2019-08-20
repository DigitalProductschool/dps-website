'use strict';
exports.handler = async function(request, response, database) {
  console.log(request.body);
  const name = request.body['name'];
  const describeYourself = request.body['describeYourself'];
  const email = request.body['email'];
  const batch = request.body['batch'];
  const scholarship = request.body['scholarship'];
  const consent = request.body['consent'];
  const track = request.body['track'];
  // TODO change to proper name
  const learnAboutSource = request.body['application-form'];
  try {
    await database
      .firestore()
      .collection('batches')
      .doc('batch-'.concat(batch))
      .collection('applications')
      .add({
        name: name,
        email: email,
        userType: describeYourself,
        batch: batch,
        scholarship: scholarship,
        consent: consent,
        track: track,
        source: learnAboutSource,
      });
    response.send('Thank you for your application');
  } catch (error) {
    console.log(error);
    response.status(500).send(error);
  }
};
//# sourceMappingURL=handleFormSubmit.js.map
