import Sequelize from 'sequelize'
import * as dotenv from 'dotenv'

dotenv.config({ path: `./${process.env.NODE_ENV}.env` })

const {
    DATABASE_NAME,
    DATABASE_USERNAME,
    DATABASE_PASSWORD,
    DIALECT
} = process.env

const sequelize = new Sequelize(DATABASE_NAME, DATABASE_USERNAME, DATABASE_PASSWORD, {
    dialect: DIALECT,
    host: process.env.DB_HOST 
})

export default sequelize
