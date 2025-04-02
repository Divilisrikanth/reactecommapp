const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const port = 5000;
const connection = require("./db/connect");
const Productsdata = require("./db/Task");
require("dotenv").config();
app.use(cors());
app.use(bodyParser.json());
app.get("/product", async (req, res, next) => {
  try {
    const items = await Productsdata.find({});
    const newItems = items.map((product) => {
      const {
        title,
        productImages,
        category,
        subcategory,
        Brand,
        Reviews,
        TotalReviews,
        Sale_price,
        currency,
        discount,
        Original_price,
        variants,
        productiD,
        color,
        Size,
        Netweight,
        sku,
      } = product;
      return {
        title,
        productImages,
        category,
        subcategory,
        Brand,
        Reviews,
        TotalReviews,
        Sale_price,
        currency,
        discount,
        Original_price,
        variants,
        productiD,
        color,
        Size,
        Netweight,
        sku,
      };
    });
    res.json(newItems);
    console.log(newItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
//switch local address of your machine to run this app on mobile android expo app metro waiting on exp://
//app.listen(port, "192.168.1.6", async () => {
app.listen(port, async () => {
  try {
    await connection(process.env.MONGO_URI);
    console.log(`server is listening at ${port}`);
  } catch (err) {
    console.log(err);
  }
});
app.get("/product/:sku", async (req, res, next) => {
  try {
    const { sku } = req.params;
    const item = await Productsdata.findOne({ sku: sku });
    if (!item) {
      return res.status(404).json({ error: "product not found" });
    }
    const {
      title,
      productImages,
      category,
      subcategory,
      Brand,
      Reviews,
      TotalReviews,
      Sale_price,
      currency,
      discount,
      Original_price,
      variants,
      productiD,
      color,
      Size,
      Netweight,
      sku: productSku,
    } = item;
    const newItem = {
      title,
      productImages,
      category,
      subcategory,
      Brand,
      Reviews,
      TotalReviews,
      Sale_price,
      currency,
      discount,
      Original_price,
      variants,
      productiD,
      color,
      Size,
      Netweight,
      sku: productSku,
    };
    res.json(newItem);
    console.log(newItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
app.get("/products/searchTerm", async (req, res, next) => {
  try {
    const apiresponse = await Productsdata.find({});
    const targetProducts = apiresponse.map((targetProduct) => {
      const {
        title,
        productImages,
        Reviews,
        TotalReviews,
        Original_price,
        Sale_price,
        currency,
        discount,
        sku
      } = targetProduct;
      return {
        title,
        productImages,
        Reviews,
        TotalReviews,
        Original_price,
        Sale_price,
        currency,
        discount,
        sku
      };
    });
    //res.json(targetProducts)
    const { data } = req.query;
    const productMatch = { match: Array.isArray(data) ? data : [data] };
    const regexArray = productMatch.match.map((term) => new RegExp(term, "i"));
    const resultedResponse = targetProducts.filter((filteredCategory) =>
      regexArray.some((regex) => regex.test(filteredCategory.title))
    );
    //const {data }= req.body;
    //const productMatch={
    // match:[data]
    //}
    //const word = new RegExp(match,i)
    //const resultedResponse = targetProducts.filter(filteredCategory =>
    //  productMatch.match.some(match=>filteredCategory.title.includes(word)))
    //const { searchTerm } = req.body
    //const resultedResponse = targetProducts.filter(filteredCategory => new RegExp(searchTerm, 'i').test(filteredCategory.title));
    if (resultedResponse.length > 0) {
      const search = resultedResponse.map((attributes) => {
        const {
          title,
          productImages,
          Reviews,
          TotalReviews,
          Original_price,
          Sale_price,
          currency,
          discount,
          sku
        } = attributes;
        return {
          title,
          productImages,
          Reviews,
          TotalReviews,
          Original_price,
          Sale_price,
          currency,
          discount,
          sku
        };
      });
     return res.json(search);
      console.log(searchresults, search);
    } else {
      return res.status(404).json({ message: `No results found for ${data}` });
    }
  
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

app.post("/createProducts", async (req, res, next) => {
  const {
    title,
    productImages,
    category,
    subcategory,
    Brand,
    Reviews,
    TotalReviews,
    Sale_price,
    currency,
    discount,
    Original_price,
    variants,
    productiD,
    color,
    Size,
    Netweight,
    sku,
  } = req.body;

  try {
    const ProductsData = await Productsdata.create({
      title,
      productImages,
      category,
      subcategory,
      Brand,
      Reviews,
      TotalReviews,
      Sale_price,
      currency,
      discount,
      Original_price,
      variants,
      productiD,
      color,
      Size,
      Netweight,
      sku,
    });

    res.status(200).json(ProductsData);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
