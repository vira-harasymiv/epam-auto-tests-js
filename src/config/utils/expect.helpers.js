async function haveBackgroundColor(element, color) {
  const cssProperties = await element.getCSSProperty('background-color');
  await expect(cssProperties.parsed.hex).toBe(color);
}

async function openedUrlContainsText(text) {
  await expect(browser).toHaveUrl(expect.stringContaining(text));
}

module.exports = { haveBackgroundColor, openedUrlContainsText };
