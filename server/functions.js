const axios = require("axios");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

exports.findItems = async (link) => {
    const items = [];

    try {
        const response = await axios.get(link); // Wait for the GET request to complete
        const dom = new JSDOM(response.data);

        const titles = [...dom.window.document.querySelectorAll(".s-item__title span")];
        const prices = [...dom.window.document.querySelectorAll(".s-item__price")];
        const images = [...dom.window.document.querySelectorAll(".s-item__image-wrapper img")];
        const links = [...dom.window.document.querySelectorAll(".s-item__link")];

        for (let i = 0; i < titles.length; i++) {
            const   title = titles[i].textContent;
            const price = prices[i] && prices[i].textContent;
            const image = images[i] && images[i].getAttribute("src");
            const ebayLink = links[i] && links[i].getAttribute("href");

            if (title !== "Shop on eBay" && price !== undefined && image !== undefined) {
                items.push({ title, price, image, ebayLink });
            }
        }

        return items
    } catch (error) {
        throw error;
    }
};
