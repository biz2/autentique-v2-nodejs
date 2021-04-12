'use strict'
import axios from 'axios'
import { AUTENTIQUE_TOKEN } from 'babel-dotenv' 

require('dotenv').config()

const Api = (token) => axios.create({
  baseURL: 'https://api.autentique.com.br/v2',
  timeout: 1000,
  headers: {
    Authorization: `Bearer ${token || process.env.AUTENTIQUE_TOKEN}`
  }
})

export default Api