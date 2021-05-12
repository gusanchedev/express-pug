const express = require('express');
const path =  require('path');
const nunjucks = require('nunjucks');


const app = express();
const productsRouter = require("./routes/products");
const productsApiRouter = require("./routes/api/products");

nunjucks.configure('views', {
    autoescape:  true,
    express:  app
});
app.use(express.static(path.join(__dirname, "public")));
app.use('/products', productsRouter);
app.use('/api/products', productsApiRouter);

const server = app.listen(3000, () => {
    console.log(`Express app listening on http://localhost:${server.address().port}`);
})

module.exports = app;