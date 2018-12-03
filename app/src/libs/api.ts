import * as ApiFactory from '../api'

const conf = new ApiFactory.Configuration({basePath: 'http://localhost:8080'})

export const API = {
  create: () => new ApiFactory.DefaultApi(conf)
}
