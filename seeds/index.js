const sequelize = require('../config/connection');
const postsData= require("./postsData")
const seedAll = async () => {
    await sequelize.sync({ force: true });
    await postsData()

    process.exit(0);
};

seedAll();
