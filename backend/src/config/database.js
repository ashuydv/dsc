const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('mongodb connected successfully');
    } catch (error) {
        console.error('mongodb connection error:', error);
        process.exit(1);
    }
}

module.exports = connectDB;