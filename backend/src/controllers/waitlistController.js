const Waitlist = require('../models/waitlistModel');

exports.addToWaitlist = async (req, res) => {
    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({ message: "Email is required" });
        }

        const newEntry = new Waitlist({ email });
        await newEntry.save();

        res.status(201).json({ message: 'Email added to waitlist successfully' });
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({ message: "Email already exists in the waitlist" });
        }

        res.status(500).json({ message: 'Error adding email to waitlist', error: error.message });

    }
}

exports.getWaitlistCount = async (req, res) => {
    try {
        const count = await Waitlist.countDocuments();
        res.json({ count });
    } catch (error) {
        res.status(500).json({ message: 'Error getting waitlist count', error: error.message });
    }
}