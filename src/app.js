import express from 'express';
import { engine } from 'express-handlebars';
import {readData} from './services/readData.js';

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static('public'))

app.get('/', (req, res) => {
    const teams = readData()
    console.log('teams:', teams)
    res.render('home', {teams});
});

app.get('/team/:id', (req, res) => {
  const teams = readData()
  console.log('teams:', teams)
  res.render('team', {teams});
});

app.use((req, res) => {
  res.status(404).send("Sorry, the requested page couldn't be found.");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});