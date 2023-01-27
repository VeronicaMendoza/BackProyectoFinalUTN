import {
    DB_HOST,
    DB_PASSWORD,
    DB_USER,
    DB_DATABASE,
    DB_PORT
}from './config.js'

import { createPool } from 'mysql2/promise'

export const pool = createPool({
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE 
})
