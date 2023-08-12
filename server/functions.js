exports.findItems = (link) => {
  const items = []
  axios.get(link).then(function (response) {
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
    [
      ...dom.window.document.querySelectorAll(".s-item__image-wrapper img"),
    ].forEach(async (el, idx) => {
      items[idx].image = el.getAttribute("src");
    });
    [...dom.window.document.querySelectorAll(".s-item__link")].forEach(
      async (el, idx) => {
        items[idx].ebayLink = el.getAttribute("href");
      }
    );
    const filtered = new Set(items);
    const filteredArray = [...filtered];
    const arr = filteredArray.filter((item) => {
      if (
        item.title != undefined &&
        item.price != undefined &&
        item.image != undefined &&
        item.title !== "Shop on eBay"
      )
        return item;
      return;
    });
    return arr
  });
};
