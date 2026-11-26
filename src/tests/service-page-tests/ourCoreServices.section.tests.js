const { pages } = require('./../../po/pages');
const { haveBackgroundColor } = require('../../config/utils/expect.helpers');
const ourCoreServicesSectionData = require('./testData/ourCoreServices.section');

describe('Our Core Services section tests', () => {
  const buttons = [
    'strategy',
    'engineering',
    'cloud',
    'cybersecurity',
    'dataAndAnalytics',
    'cx',
    'artificialIntelligence',
  ];

  beforeEach(async () => {
    await pages('services').open();
    await pages('services').acceptCookies();
  });

  //Skipped due to the cloudflare
  it.skip('title should be - Our Core Services', async () => {
    await pages('services').ourCoreServicesSection.title.waitForDisplayed();
    await expect(pages('services').ourCoreServicesSection.title).toHaveText(
      ourCoreServicesSectionData.title,
    );
  });

  it('stratey button should change color on hover from black to white', async () => {
    await pages('services')
      .ourCoreServicesSection.buttons('strategy')
      .waitForClickable();
    await haveBackgroundColor(
      pages('services').ourCoreServicesSection.buttons('strategy'),
      '#060606',
    );
    await pages('services').ourCoreServicesSection.buttons('strategy').moveTo();
    await haveBackgroundColor(
      pages('services').ourCoreServicesSection.buttons('strategy'),
      '#ffffff',
    );
  });

  // for (const button of buttons) {
  //   it.(`${button} button should change color on hover from black to white`, async () => {
  //     await pages('services')
  //       .ourCoreServicesSection.buttons(button)
  //       .waitForClickable();
  //     await haveBackgroundColor(
  //       pages('services').ourCoreServicesSection.buttons(button),
  //       '#060606',
  //     );
  //     await pages('services').ourCoreServicesSection.buttons(button).moveTo();
  //     await haveBackgroundColor(
  //       pages('services').ourCoreServicesSection.buttons(button),
  //       '#ffffff',
  //     );
  //   });
  // }
});
