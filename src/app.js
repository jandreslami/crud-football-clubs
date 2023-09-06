/* eslint-disable no-undef */
import 'dotenv/config'
import express from 'express';
import { engine } from 'express-handlebars';
import router from './router.js';
import { readData } from './services/dataService.js';
const app = express();

const db = readData();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static('public'))

app.use('/',router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});