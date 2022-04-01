const sequelize = require('../config/connection');
const seedPosts= require("./seedPosts")
const seedUser= require("./seedUser")
const seedReplies = require("./seedReplies")
//when i am called, call every seed file found within directory and run then. dont forget to yeild for the results.
const seedAll = async () => {
    await sequelize.sync({ force: true });
    await seedUser()
    await seedPosts()
    await seedReplies()
    process.exit(0);
};

seedAll();