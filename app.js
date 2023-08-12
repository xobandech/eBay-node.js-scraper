const axios = require("axios");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const items = [];

const findItems = (link) => axios
  .get(
    link
  )
  .then(function (response) {
    const dom = new JSDOM(response.data);
    [...dom.window.document.querySelectorAll(".s-item__title span")].forEach(
      (el) => {
        items.push({ title: el.textContent });
      }
    );
    [...dom.window.document.querySelectorAll(".s-item__price")].forEach(
      async (el, idx) => {
        items[idx].price = el.textContent;
      }
    ); 
    [...dom.window.document.querySelectorAll(".s-item__image-wrapper img")].forEach(
      async (el, idx) => {
        items[idx].image = el.getAttribute("src");
      }
    ); 
    [...dom.window.document.querySelectorAll(".s-item__link")].forEach(
      async (el, idx) => {
        items[idx].ebayLink = el.getAttribute("href");
      }
    ); 
    const filtered = new Set(items);
    const filteredArray = [...filtered]
    const arr = filteredArray.filter(item => {
      if (item.title != undefined && item.price != undefined && item.image != undefined && item.title !== 'Shop on eBay') return item
      return
    })
    console.log(arr);
});

findItems("https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2047675.m570.l1313&_nkw=iphone&_sacat=0")
