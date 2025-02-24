const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes'); 
const productsRoutes = require('./routes/productsRoutes');
const logger = require('./middleware/logger');
const port = process.env.PORT || 5000;


app.use(express.json()); // Middleware to parse JSON

//global error-handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  });

//the logger middleware
app.use(logger);

app.use('/api/users', userRoutes);
app.use('/api/products', productsRoutes);



app.listen(port, () =>{
    console.log(`Server is running on http://localhost:${port}`);
})
