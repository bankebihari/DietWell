const mongoose = require('mongoose');
require('dotenv').config();

const contactConnect = async () => {
  try {
    await mongoose.connect(process.env.CONTACT_DATABASE_URL, {
      useNewUrlParser: true, // Use the new URL parser
      useUnifiedTopology: true, // Use the new server discovery and monitoring engine
      useCreateIndex: true, // Ensure indexes are created correctly
      useFindAndModify: false, // Use native `findOneAndUpdate()` rather than `findAndModify()`
    });
    console.log("Contact database connected successfully");
  } catch (error) {
    console.error("Issue in DB Connection:", error.message);
    process.exit(1); // Exit the process with a failure code
  }
};

module.exports = contactConnect;
