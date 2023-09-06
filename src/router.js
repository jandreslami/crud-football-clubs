import express from "express"
import { readData } from "./services/dataService.js";
import { findTeamByTLA } from "./utils.js";

const router = express.Router()

router.get('/', (req, res) => {
    const teams = readData()
    res.render('home', {teams});
});

router.get('/team/:id', async (req, res) => {
  const teamId = req.params.id;
  const teams = readData()
  const requestedTeam =  await findTeamByTLA(teams, teamId);

  res.render('teamDetails', {requestedTeam});
});

router.get('/new/team', (req, res) => {
  res.render('newTeam');
});

router.get('/save', (req, res) => {
  console.log(req);
  res.render('newTeam');
});

router.use((req, res) => {
  res.status(404).send("Sorry, the requested page couldn't be found.");
});

export default router