import { Router } from 'express'

import DevController from './app/controllers/DevController'

const routes = Router()

routes.get('/', (_, res) => {
  return res.json({
    message: 'Hello :)'
  })
})

routes.route('/devs').post(DevController.store)

export default routes
