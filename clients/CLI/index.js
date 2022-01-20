import api from './services/api.service.js'

api.trades("BTC_USD", 3, (data) => {
  console.log(data)
}); // test

export default api