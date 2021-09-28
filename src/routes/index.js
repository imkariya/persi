import User from './user'
import swaggerUi from 'swagger-ui-express'
import swaggerDocument from '../../swagger.json'

const routes = (app) => {
    app.use('/users', User)
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}
export default routes
