const axios = require("axios");
const cheerio = require("cheerio");

exports.findItems = async (link) => {
    const items = [];

    try {
        const response = await axios.get(link); // Wait for the GET request to complete
        const $ = cheerio.load(response.data);

        const titles = $(".s-item__title span");
        const prices = $(".s-item__price");
        const images = $(".s-item__image-wrapper img");
        const links = $(".s-item__link");

        for (let i = 0; i < titles.length; i++) {
            const title = $(titles[i]).text();
            const price = $(prices[i]).text();
            const image = $(images[i]).attr("src");
            const ebayLink = $(links[i]).attr("href");

            if (title !== "Shop on eBay" && price !== undefined && image !== undefined) {
                items.push({ title, price, image, ebayLink });
            }
        }

        return items;
    } catch (error) {
        throw error;
    }
};
