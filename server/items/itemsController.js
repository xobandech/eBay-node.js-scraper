const { findItems } = require('../functions');

exports.searchItems = async (req, res) => {
    try {
        const { query, page } = req.query;
        console.log(query, page);
        const queryString = `https://www.ebay.com/sch/i.html?_from=R40&_nkw=${encodeURIComponent(query)}&_sacat=0&_pgn=${page}`
        const items = await findItems(queryString);
        res.status(200).json({ success: true, data: items });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Internal Server Error");
    }
};
