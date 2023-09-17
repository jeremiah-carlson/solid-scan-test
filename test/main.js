const helpers = require("./scripts/helpers")
const puppeteer = require('puppeteer');

const scanners = {
  concert: {
    instances: 100,
    url: "https://salmon-rock-0523f670f.3.azurestaticapps.net/concert",
    input: "1001-A1-B25",
  },
  default: {
      instances: 100,
      url: "https://jeremiah-carlson.github.io/solid-scan/#/",
      input: "1-2",
    },
};



(async () => {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({headless: "new"});
  const pgArr = [];
  
  for (let scan of Object.values(scanners)) {
    pgArr.push(...Array(scan.instances).fill(scan));
  };

  await pgArr.forEach(p=>{
    helpers.testScanner(browser, p.url, p.input, {
      timeout: {
        min: 500,
        max: 6000
      }
    });

  })

})();

