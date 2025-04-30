// ====================================================
// 🌐 EXPRESS SERVER CONFIGURATION FILE
// ====================================================

const express = require('express');
const app = express();

const router = require('./src/routes/api');



// ====================================================
// 🔐 SECURITY MIDDLEWARES
// ====================================================

const cors = require('cors');
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require('helmet');
const hpp = require('hpp');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')





// ====================================================
// ✅ ENABLE SECURITY MIDDLEWARES (UNCOMMENT FOR USE)
// ====================================================

// app.use(cors());                 // Enable Cross-Origin Resource Sharing
// app.use(helmet());              // Set secure HTTP headers
// app.use(hpp());                 // Prevent HTTP Parameter Pollution
// app.use(mongoSanitize());      // Sanitize input to prevent MongoDB injection
app.use(bodyParser.json())



// ====================================================
// 🚫 REQUEST RATE LIMITING (PROTECT FROM ABUSE)
// ====================================================

// const limiter = rateLimit({
//     windowMs: 15 * 60 * 1000,     // ⏱ 15 minutes
//     limit: 100,                   // 🚫 Limit each IP to 100 requests
//     standardHeaders: 'draft-8',   // 📋 Use modern headers (RateLimit)
//     legacyHeaders: false          // ❌ Disable legacy headers (X-RateLimit-*)
// });

// app.use(limiter); // Apply rate limiting to all requests



// ====================================================
// 🔌 DATABASE CONNECTION
// ====================================================

const uri = 'mongodb://localhost:27017/School';

const options = {
  user: '',
  pass: ''
};

async function connectDB() {
  try {
    await mongoose.connect(uri, options);
    console.log('✅ Connected to MongoDB!');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err);
  }
}

connectDB();



// ====================================================
// 🚀 BASE ROUTE
// ====================================================

app.get('/', (req, res) => {
  res.send('🌍 Hello World from Express!');
});



// ====================================================
// 📦 API ROUTING
// ====================================================

app.use('/api/v1', router);



// ====================================================
// 📤 EXPORT APP MODULE
// ====================================================

module.exports = app;
