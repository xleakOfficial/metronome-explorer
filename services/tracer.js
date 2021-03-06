import axios from 'axios'

const tracerApi = axios.create({ baseURL: process.env.tracerUrl })
const tracer = {}

tracer.transaction = function (transactionHash) {
  return tracerApi.get(`/transactions/${transactionHash}`)
    .then(res => res.data)
}

export default tracer
