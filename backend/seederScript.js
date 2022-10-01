import { connectDB } from "./config/db.js";
import { products } from "./data/products.js";
import { Product } from "./models/Product.js";

connectDB();

const importData = async() => {
    try {
        await Product.deleteMany({});
        await Product.insertMany(products);

        console.log('Data imported successfully.');
    } catch (error) {
        console.error('Error while importing data', error);
        process.exit(1);
    }
}

importData();
