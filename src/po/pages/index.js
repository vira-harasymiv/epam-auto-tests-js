const ServicesPage = require('./services.page');
const AboutPage = require('./about.page');
const CareersPage = require('./careers.page');

function pages(name) {
  const names = {
    services: new ServicesPage(),
    about: new AboutPage(),
    careers: new CareersPage(),
  };
  return names[name.toLowerCase()];
}

module.exports = {
  ServicesPage,
  AboutPage,
  CareersPage,
  pages,
};
