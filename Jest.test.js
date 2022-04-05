require("chromedriver");
const chai = require('chai');
const expect = require('chai').expect;

// Application Server
const serverUri = "https://www.google.com/";

// Official selenium webdriver testing setup
const {By,Key,Builder} = require('selenium-webdriver');

describe('basic test', function () {
    let driver;
    beforeAll(async () => {
        // Start of test use this
        driver = await new Builder().forBrowser("chrome").build();
        console.log("Selenium Webdriver Chrome Started");
    });

    afterAll(function(){
        // End of test use this.
        driver.quit();
    });

    it('should be on correct page', function (done) {
        driver.get(serverUri);
        driver.getTitle().then(function(title) {
			console.log(title);
            expect(title).to.equal('');
            done();
            console.log("Selenium Webdriver Chrome Shutdown");
        })
    });
	it('should be on correct time from search', async function (done) {
		const searchString = "Time";
		await driver.findElement(By.name("q")).sendKeys(searchString,Key.RETURN);
 
        //Verify the page title and print it
        var title = await driver.getTitle();
        console.log('Title is:',title)
		expect(title).to.equal('Time - Google Search');
	}, 50000);
});