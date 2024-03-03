import express,{Express} from "express";
import dotenv from "dotenv";

const app:Express = express();

const port = process.env.PORT;

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
});