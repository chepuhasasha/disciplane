#!/ust/bin/env node

import api from '../services/api.service.js';
import cnsl from '../services/log.service.js';
import inquirer from "inquirer";
import scenarios from './scenarios.js'

async function select(array) {
  const result = {}
  for (const q of array) {
    await inquirer.prompt(q).then(answer => {
      result[q.name] = answer[q.name]
    })
  }
  return result
}

async function init() {
  const login = await select(scenarios.login)
  cnsl.clear()
  const config = select(scenarios.config)
}

init()