const ppt = require('puppeteer');

const helpers = {

    openPage: async function (browser, url, input) {
        const selector = "#MainInput";

        browser.newPage()
        .then((pg)=>{
            pg.goto(url)
            .then(_=>
                pg.waitForSelector(selector)
                .then(_=>
                    pg.type(selector, input, {delay: 100})
                    )
                    .then(_=>
                        pg.keyboard.press("Enter")
                    )
            )
        })
        
    }

};

module.exports = helpers;