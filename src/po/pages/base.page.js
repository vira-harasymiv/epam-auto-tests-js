const { Header, HamburgerMenu, CookieBanner } = require('../components');

class BasePage {
  constructor(url) {
    this.url = url;
    this.header = new Header();
    this.hamburgerMenu = new HamburgerMenu();
    this.cookieBanner = new CookieBanner();
  }

  // Expands the browser window and opens URL
  async open() {
    await browser.maximizeWindow();
    await browser.url(this.url);
  }

  // Accepts cookies if they appear
  async acceptCookies() {
    if (!(await this.isDisplayedCookies())) {
      return;
    }

    await this.cookieBanner.acceptAllBtn.waitForClickable();
    await this.cookieBanner.acceptAllBtn.click();
    await this.cookieBanner.rootEl.waitForDisplayed({ reverse: true });
  }

  // Checks if cookies appear: return true if they appear and false if don't
  async isDisplayedCookies() {
    try {
      await this.cookieBanner.rootEl.waitForDisplayed({ timeout: 5_000 });
      return true;
    } catch {
      return false;
    }
  }

  // Scrolls the page
  async scroll(x, y) {
    await browser.execute((left, top) => window.scrollTo(left, top), x, y);
  }

  // Scrolls to the top
  async scrollToTop() {
    await this.scroll(0, 0);
  }
}

module.exports = BasePage;
