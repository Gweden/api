import cors from 'cors'

const whitelist = ['http://localhost:4200']


const CorsOptions: cors.CorsOptions = {
  origin: whitelist
}

export default CorsOptions
