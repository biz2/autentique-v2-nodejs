'use strict'
import axios from 'axios'

require('dotenv').config()

const Api = (token) => axios.create({
  baseURL: 'https://api.autentique.com.br/v2',
  timeout: 1000,
  headers: {
    Authorization: `Bearer ${token || process.env.AUTENTIQUE_TOKEN}`
  }
})

export default Api