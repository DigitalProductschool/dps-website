const {expect} = require('chai');
const axios = require('axios');

describe('Apply Buttons point to correct page:', function () {
  const website = process.env.WEBSITE

  it('Website returns successfully', async function () {
    const response = await axios.get(website);

    expect(response.status).to.equal(200);
  })
})
