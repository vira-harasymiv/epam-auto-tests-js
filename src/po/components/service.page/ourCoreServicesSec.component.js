const BaseComponent = require('../common/base.component');

class OurServicesSectionComponent extends BaseComponent {
  constructor() {
    super(
      '//*[contains(text(), "Our Core Services" )]//ancestor::*[contains(@class, "section__wrapper")]',
    );
  }

  get title() {
    return this.rootEl.$('//*[contains(text(), "Our Core Services" )]');
  }

  /**
   * @param {'strategy' | 'engineering' | 'cloud' | 'cybersecurity' | 'dataAndAnalytics' | 'cx' | 'artificialIntelligence'} name
   * @returns button's selector in the "Our Services Section"
   */
  buttons(name) {
    const selectors = {
      strategy: '//*[contains(@href, "strategy")]/span',
      engineering: '//*[contains(@href, "engineering")]/span',
      cloud: '//*[contains(@href, "cloud")]/span',
      cybersecurity: '//*[contains(@href, "cybersecurity")]/span',
      dataAndAnalytics: '//*[contains(@href, "data-and-analytics")]/span',
      cx: '//*[contains(@href, "customer-experience")]/span',
      artificialIntelligence:
        '//*[contains(@href, "artificial-intelligence")]/span',
    };
    return this.rootEl.$(selectors[name]);
  }
}

module.exports = OurServicesSectionComponent;
