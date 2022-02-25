import express from 'express'
import path from "path";

const app = express();
const port = process.env.PORT || 3001

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));
