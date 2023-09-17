const ppt = require('puppeteer');

const helpers = {

    randInt: function(min, max) {
        return Math.floor((Math.random() * (max-min))+min)
    },

    enterInput: function (pg, selector, input, options) {
        pg.waitForSelector(options["selector"]??"#MainInput")
                .then(_=>
                    pg.type(options["selector"]??"#MainInput", input, {delay: 200})
                    )
                    .then(_=>
                        pg.keyboard.press("Enter")
                        .then(_=>
                            pg.waitForTimeout(this.randInt(options["timeout"]["min"]??100, options["timeout"]["max"]??10000))
                            .then(_=>
                                this.enterInput(pg, selector, input, options=options)
                            )
                        )
                    )
    },

    testScanner: function (browser, url, input, options={}) {
        const selector = "#MainInput";

        browser.newPage()
        .then((pg)=>{
            pg.waitForTimeout(this.randInt(0, 60000))
            .then(_=>
                pg.goto(url)
                .then(_=>
                    this.enterInput(pg, selector, input, options={
                        timeout: 10000
                    })
                )  
            )
        })
        
    }

};

module.exports = helpers;