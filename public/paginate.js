require('dotenv').config();
const limit = process.env.LIMIT;

const offSetLimit  = (page) => {
    if (!page){
        return 0
    }
    else{
        page = (page * limit) - limit;
        return page;
    }
}

module.exports = { offSetLimit, limit}