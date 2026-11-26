const { MainSection } = require('../components');
const BasePage = require('./base.page');

class AboutPage extends BasePage {
  constructor() {
    super('/about');
    this.mainSection = new MainSection();
  }
}

module.exports = AboutPage;
