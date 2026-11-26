const { pages } = require('../../po/pages');
const { openedUrlContainsText } = require('../../config/utils/expect.helpers');
const mainSectionData = require('./testData/main.section');

describe('Main section tests', () => {
  beforeEach(async () => {
    await pages('about').open();
    await pages('careers').acceptCookies();
  });

  it('title should be About', async () => {
    await pages('about').mainSection.title.waitForDisplayed();
    await expect(pages('about').mainSection.title).toHaveText(
      mainSectionData.title,
    );
  });

  //Skipped due to the cloudflare
  it.skip('should be correct description', async () => {
    await pages('about').mainSection.description.waitForDisplayed();
    await expect(pages('about').mainSection.description).toHaveText(
      mainSectionData.description,
    );
  });

  it('contact us button should lead to the Contact Us page', async () => {
    await pages('about').mainSection.contactUsBtn.waitForClickable();
    await pages('about').mainSection.contactUsBtn.click();
    await openedUrlContainsText('about/who-we-are/contact');
  });
});
