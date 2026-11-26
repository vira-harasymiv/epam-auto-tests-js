const BasePage = require('./base.page');
const { PinnedBanner } = require('../components');

class CareersPage extends BasePage {
  constructor() {
    super('/careers');
    this.pinnedBanner = new PinnedBanner();
  }
}

module.exports = CareersPage;
