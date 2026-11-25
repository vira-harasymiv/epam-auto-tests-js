const { Header, HamburgerMenu, CookieBanner } = require('../components');

class BasePage {
  constructor(url) {
    this.url = url;
    this.header = new Header();
    this.hamburgerMenu = new HamburgerMenu();
    this.cookieBanner = new CookieBanner();
  }

  open() {
    return browser.url(this.url);
  }
}
