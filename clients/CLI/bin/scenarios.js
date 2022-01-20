export default {
  login: [
    {
      type: "string",
      name: "login",
      message: "LOGIN:",
    },
    {
      type: "password",
      name: "password",
      message: "PASSWORD:",
    },
  ],
  config: [
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
}

