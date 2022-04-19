console.log('hello');
const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const { errorHandler } = require('./middlewares/errorMiddleware');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('api/review', require('./routes/reviewsRoutes'));

// app.use(errorHandler);
app.listen(port, () => {
    console.log(`server running on port ${port}`);
});
