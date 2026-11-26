const { OurServicesSection } = require('../components');
const BasePage = require('./base.page');

class ServicesPage extends BasePage {
  constructor() {
    super('/services');
    this.ourCoreServicesSection = new OurServicesSection();
  }
}

module.exports = ServicesPage;
