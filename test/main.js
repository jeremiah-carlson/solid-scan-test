const helpers = require("./scripts/helpers")
const puppeteer = require('puppeteer');

(async () => {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({headless: false});
  const arr1 = [
    "https://salmon-rock-0523f670f.3.azurestaticapps.net/concert",
    "https://salmon-rock-0523f670f.3.azurestaticapps.net/concert", 
    "https://salmon-rock-0523f670f.3.azurestaticapps.net/concert",
    "https://salmon-rock-0523f670f.3.azurestaticapps.net/concert",
    "https://salmon-rock-0523f670f.3.azurestaticapps.net/concert", 
    "https://salmon-rock-0523f670f.3.azurestaticapps.net/concert",
  ]
  await arr1.forEach(p=>{
    helpers.openPage(browser, p, "1001-A1-B25");

  })

})();

