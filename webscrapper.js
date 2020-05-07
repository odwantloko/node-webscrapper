const puppeteer = require('puppeteer');

async function scrapeProduct(url){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    page.goto(url);

    const [el] = await page.$x('/html/body/div/section[2]/div/div[1]/a'); //xpath
    const src = el.getProperty('src');
    const srcTxt = (await src).jsonValue();

    console.log({srcTxt});

    browser.close();
}

scrapeProduct('https://www.stateofthenation.gov.za/');