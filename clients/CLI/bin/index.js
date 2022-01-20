#!/ust/bin/env node

import cnsl from '../services/log.service.js';
import api from '../services/api.service.js';
import inquirer from "inquirer";
import { questions } from './questions.js'

async function select(array) {
  const config = {}
  for (const q of array) {
    await inquirer.prompt(q).then(answer => {
      config[q.name] = answer[q.name]
    })
  }
  cnsl.obj(config);
}


const init = () => {
  select(questions)
}

init()