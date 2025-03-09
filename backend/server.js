const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mysqlPool = require("./config/mysql");
const connectMongoDB = require("./config/mongodb");

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectMongoDB();

// Default Route
app.get('/', (req, res) => {
  res.send('Hospital Management System API is running...');
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
    console.log(`🚀 Server running on port ${PORT}`);
    
    // Test MySQL Connection
    try {
        const connection = await mysqlPool.getConnection();
        console.log("✅ MySQL Connected Successfully");
        connection.release();
    } catch (error) {
        console.error("❌ MySQL Connection Error:", error);
    }
});
