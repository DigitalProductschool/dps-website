const {expect} = require('chai');
const puppeteer = require('puppeteer');

describe('Apply Buttons point to correct page:', function () {
  this.timeout(7000)

  const website = process.env.WEBSITE

  // Define global variables
  let browser
  let page

  before(async function () {
    browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']})
    page = await browser.newPage()
  })

  beforeEach(async function () {
    page = await browser.newPage()
    await page.goto(website, {timeout: 0})
  })

  afterEach(async function () {
    await page.close()
  })

  after(async function () {
    await browser.close()
  })


  it('Main apply button exists and forwards to Typeform', async function () {
    const expectedHref = 'https://utum.typeform.com/to/qkkFHF?ref=website&entry-point=header'

    const actualHref = await page.evaluate(() => document.querySelector('.header-content__buttons a').getAttribute("href") )
    expect(actualHref).to.equal(expectedHref)
  })
})
