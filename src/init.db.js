import fs from 'node:fs';
import { fileExists } from './utils.js';
async function initializeDb(){
  if ( await fileExists('data/teams.db.json')) {
    return console.log('Database already exists.');
  }else {
        try {
          fs.copyFileSync('data/teams.json', 'data/teams.db.json');
          console.log('Database initialized successfully.');
        } catch (error) {
          console.error('Error initializing database:', error);
        }}
      }

initializeDb();
