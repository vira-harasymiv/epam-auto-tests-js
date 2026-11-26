const { pages } = require('./../../po/pages');
const { openedUrlContainsText } = require('../../config/utils/expect.helpers');

describe('Pinned banner tests', () => {
  beforeEach(async () => {
    await pages('careers').open();
    await pages('careers').acceptCookies();
  });

  it('should not be pinned after the page loading', async () => {
    await expect(pages('careers').pinnedBanner.rootEl).toExist();
    await expect(pages('careers').pinnedBanner.rootEl).not.toHaveElementClass(
      'pinned',
    );
  });

  it('should appear after scrolling down', async () => {
    await pages('careers').scroll(0, 800);
    await expect
      .soft(pages('careers').pinnedBanner.rootEl)
      .toBeDisplayedInViewport();
    await expect
      .soft(pages('careers').pinnedBanner.rootEl)
      .toHaveElementClass('pinned');
  });

  it('button should lead to the Jobs page', async () => {
    await pages('careers').scroll(0, 800);
    await pages('careers').pinnedBanner.startYourSearchHereBtn.waitForClickable(
      { timeout: 5_000 },
    );
    await pages('careers').pinnedBanner.startYourSearchHereBtn.click();
    await openedUrlContainsText('/jobs');
  });

  it('should dissapear after scrolling up', async () => {
    await pages('careers').scroll(0, 800);
    await expect(pages('careers').pinnedBanner.rootEl).toHaveElementClass(
      'pinned',
    );
    await pages('careers').scrollToTop();
    await expect(pages('careers').pinnedBanner.rootEl).not.toHaveElementClass(
      'pinned',
    );
  });
});
