const mongoose = require("mongoose");

const connectDB = async (DataBaseUrl) => {
    try {
        const DB_OPTION = {
            dbname: "easycryptoexchange",
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
        await mongoose.connect(DataBaseUrl, DB_OPTION);
        console.log("connect sucessfully....")
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB;