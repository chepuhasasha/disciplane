export const questions = [
  {
    type: "list",
    name: "pair",
    message: "PAIR",
    choices: ["BTC_USD", "USD_RUB"],
  },
  {
    type: "number",
    name: "limit",
    message: "LIMIT:",
  },
  {
    type: "number",
    name: "time",
    message: "UPDATE TIME (sec.):",
  },
  {
    type: "password",
    name: "token",
    message: "TOKEN:",
  },
  {
    type: "list",
    name: "config",
    message: "save settings?",
    choices: ["Yes", "No"],
  },
  {
    type: "list",
    name: "load",
    message: "load settings from config.json?",
    choices: ["Yes", "No"],
  },
]