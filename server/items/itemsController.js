const { findItems } = require('../functions');

exports.searchItems = async (req, res) => {
    try {
        const { query } = req.query;
        const { page = 1 } = req.query
        console.log(page);
        const queryString = `https://www.ebay.com/sch/i.html?_from=R40&_nkw=${query}&_sacat=0&_pgn=${page}`
        const items = await findItems(queryString);
        res.send(items); 
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Internal Server Error"); // Handle errors
    }
};
