const puppeteer = require('puppeteer')
const fileUrl = require('file-url')
const path = require('path')

const main = async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(fileUrl('tategaki.html'))
  await page.screenshot({path: path.join('tmp', 'cap.png')})

  await browser.close()
}

main()