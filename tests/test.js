'use strict'
import autentique from '../src'
import createDocument from './document/create'

require('dotenv').config()

(async () => {
  autentique.token = process.env.AUTENTIQUE_TOKEN
  autentique.sandbox = process.env.AUTENTIQUE_DEV_MODE
  await createDocument(autentique) 
})()