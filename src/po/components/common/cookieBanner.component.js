const BaseComponent = require('./base.component');

class CookieBannerComponent extends BaseComponent {
  constructor() {
    super('[aria-label="Cookie banner"]');
  }

  get acceptAllBtn() {
    return this.rootEl.$('#onetrust-accept-btn-handler');
  }
}

module.exports = CookieBannerComponent;
