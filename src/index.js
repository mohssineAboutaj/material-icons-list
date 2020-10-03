const puppeteer = require("puppeteer");
const writeJson = require("write-json");
const { baseURL } = require("./global");

// init scraping
(async () => {
  // launch & init browser window
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // open the url
  await page.goto(baseURL);

  // get the page content
  let output = await page.evaluate((data) => {
    let result = [];
    let all = document.querySelectorAll("icons-category icons-item");

    // loop & extract icon name
    all.forEach((icon) => {
      let iconName = icon.querySelector("div").getAttribute("title");
      iconName = iconName.trim();
      if (iconName) {
        result.push(iconName);
      }
    });

    return result;
  });

  // insert into json file
  writeJson("data.json", output, (err) => {
    if (err) {
      throw err;
    } else {
      console.log("inserted successfuly");
    }
  });

  // close browser
  await browser.close();
})();
