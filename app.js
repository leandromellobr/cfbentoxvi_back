const express = require('express');
const app = express();
const dotenv = require('dotenv');

dotenv.config();

app.use(express.json());

// Rotas
const userRoutes = require('./routes/userRoutes');
const courseRoutes = require('./routes/courseRoutes');

app.use('/api/users', userRoutes);
app.use('/api/courses', courseRoutes);

module.exports = app;
