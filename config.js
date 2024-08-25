require('dotenv').config(); 
const mongoose = require("mongoose");


const connectDB = async () => {
    // Debugging line
    console.log('Mongo URI:', process.env.MONGO_URI);

    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected...');
    } catch (err) {
        console.error('MongoDB connection error:', err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
