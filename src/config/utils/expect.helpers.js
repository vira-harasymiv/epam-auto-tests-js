//Checks the button background color
async function haveBackgroundColor(element, color) {
  const cssProperties = await element.getCSSProperty('background-color');
  await expect(cssProperties.parsed.hex).toBe(color);
}

//Checks if the opened URL matches the expected text
async function openedUrlContainsText(text) {
  await expect(browser).toHaveUrl(expect.stringContaining(text));
}

module.exports = { haveBackgroundColor, openedUrlContainsText };
