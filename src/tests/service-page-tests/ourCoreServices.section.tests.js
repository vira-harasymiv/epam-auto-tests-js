const { pages } = require('./../../po/pages');
const { haveBackgroundColor } = require('../../config/utils/expect.helpers');

describe('Our Core Services section tests', () => {
  beforeEach(async () => {
    await pages('services').open();
    await pages('services').acceptCookies();
  });

  it('title should be - Our Core Services', async () => {
    await pages('services').ourCoreServicesSection.title.waitForDisplayed();
    await expect(pages('services').ourCoreServicesSection.title).toHaveText(
      'Our Core Services',
    );
  });

  it('buttons should change color on hover from black to white', async () => {
    const buttons = [
      'strategy',
      'engineering',
      'cloud',
      'cybersecurity',
      'dataAndAnalytics',
      'cx',
      'artificialIntelligence',
    ];
    for (const button of buttons) {
      await pages('services')
        .ourCoreServicesSection.buttons(button)
        .waitForClickable();
      await haveBackgroundColor(
        pages('services').ourCoreServicesSection.buttons(button),
        '#060606',
      );
      await pages('services').ourCoreServicesSection.buttons(button).moveTo();
      await haveBackgroundColor(
        pages('services').ourCoreServicesSection.buttons(button),
        '#ffffff',
      );
    }
  });
});
