const BaseComponent = require('../common/base.component');

class MainSectionComponent extends BaseComponent {
  constructor() {
    super('//*[contains(text(), "About")]//ancestor::*[@class="section"]');
  }

  get title() {
    return this.rootEl.$('//h1//span[contains(text(), "About")]');
  }

  get description() {
    return this.rootEl.$('//p[contains(text(), "We can help")]');
  }

  get contactUsBtn() {
    return this.rootEl.$('//p/a[contains(@href, "about/who-we-are/contact")]');
  }
}

module.exports = MainSectionComponent;
