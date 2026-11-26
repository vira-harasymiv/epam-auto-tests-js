const { pages } = require('../../po/pages');
const { openedUrlContainsText } = require('../../config/utils/expect.helpers');

describe('Pinned banner tests', () => {
  beforeEach(async () => {
    await pages('careers').open();
    await pages('careers').acceptCookies();
  });

  it('should not be pinned after the page loading', async () => {
    await pages('careers').pinnedBanner.rootEl.waitForExist({
      timeout: 30_000,
    });
    await expect(pages('careers').pinnedBanner.rootEl).not.toHaveElementClass(
      'pinned',
    );
  });

  it('should appear after scrolling down', async () => {
    await pages('careers').scroll(0, 800);
    await pages('careers').pinnedBanner.rootEl.waitForDisplayed({
      timeout: 30_000,
    });
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
      { timeout: 30_000 },
    );
    await pages('careers').pinnedBanner.startYourSearchHereBtn.click();
    await openedUrlContainsText('/jobs');
  });

  it('should dissapear after scrolling up', async () => {
    await pages('careers').scroll(0, 800);
    await pages('careers').pinnedBanner.rootEl.waitForDisplayed({
      timeout: 30_000,
    });
    await expect(pages('careers').pinnedBanner.rootEl).toHaveElementClass(
      'pinned',
    );
    await pages('careers').scrollToTop();
    await expect(pages('careers').pinnedBanner.rootEl).not.toHaveElementClass(
      'pinned',
      { timeout: 30_000 },
    );
  });
});
