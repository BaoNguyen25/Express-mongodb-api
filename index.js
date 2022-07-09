import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import morgan from 'morgan';
import dotenv from 'dotenv';

const app = express();
const PORT = 5000;
dotenv.config();

//CONNECT DATABASE
mongoose.connect((process.env.MONGODB_URL), () => {
    console.log("Connected to MongoDB")
});

app.use(bodyParser.json());
app.use(cors());
app.use(morgan("common"));

app.listen(PORT, () => console.log(`Server is running on port: http://localhost:${PORT}`));
