import dotenv from 'dotenv'

dotenv.config()

const config = {
  connectionLimit: 1,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
  insecureAuth: true
}

const db = connect()

function connect () {

  // Return client
  return null //
}

export default db
