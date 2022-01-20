import axios from "axios";
import qs from "qs";
import cnsl from "./log.service.js"

const trades = (pair, limit, cb) => {
  const data = { pair, limit }
  const options = {
    method: "POST",
    headers: { "Content-type": "application/x-www-form-urlencoded" },
    data: qs.stringify(data),
    url: "https://api.exmo.com/v1/trades",
  }

  axios(options)
    .then((res) => {
      if(res.data.error) {
        cnsl.error(res.data.error)
      }
      cnsl.sucsess('Data received')
      cb(res.data[pair])
    })
    .catch((err) => {
      cnsl.error(err)
    })
}

export default { trades }