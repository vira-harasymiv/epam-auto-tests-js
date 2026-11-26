const BaseComponent = require('../common/base.component');

class PinnedBannerComponent extends BaseComponent {
  constructor() {
    super('.copied-pinned-link');
  }

  get startYourSearchHereBtn() {
    return this.rootEl.$('.button-body');
  }
}

module.exports = PinnedBannerComponent;
