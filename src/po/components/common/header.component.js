const BaseComponent = require('./base.component');

class HeaderComponent extends BaseComponent {
  constructor() {
    super('//*[@class = "header__inner"]');
  }

  get hamburgerMenuBtn() {
    return this.rootEl.$('button.hamburger-menu__button');
  }

  /**
   * @param {'services' | 'industries' | 'insights' | 'about' | 'careers'} buttonName
   * @returns the menu button locator, located in the header
   */
  getMenuButton(buttonName) {
    const selectors = {
      services: '//span//ancestor::a[text() = "Services"]',
      industries: '//span//ancestor::a[text() = "Industries"]',
      insights: '//span//ancestor::a[text() = "Insights"]',
      about: '//span//ancestor::a[text() = "About"]',
      careers: '//span//ancestor::a[text() = "Careers"]',
    };
    return this.rootEl.$(selectors[buttonName.toLowerCase()]);
  }
}

modules.exports = HeaderComponent;
