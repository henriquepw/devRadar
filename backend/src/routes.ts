import { Router } from 'express'

import DevController from './app/controllers/DevController'
import SearchController from './app/controllers/SearchController'

const routes = Router()

routes.get('/', (_, res) => res.json({ message: 'Hello :)' }))

routes
  .route('/devs')
  .get(DevController.index)
  .post(DevController.store)

routes.get('/search', SearchController.index)

export default routes
