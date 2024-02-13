import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000;

//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/health', (req, res) =>{
    res.status(200).send('I am healthy')
});

app.listen(PORT, () =>{
    console.log(`Server is running on PORT ${PORT}`)
});
