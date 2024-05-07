require('dotenv').config();

const connectDB = require('./db/connect');
const Product = require('./models/product');

const jsonProducts = require('./products.json');

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    console.log('DB seeder connected');

    await Product.deleteMany();
    console.log('Delete all products');

    await Product.create(jsonProducts);
    console.log('New products added');
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
