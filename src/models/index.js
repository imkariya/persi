import sequelize from '../config'
import User from './user'
import encrypt from '../initializers/encrypt'
import { nanoid } from 'nanoid'

const users = sequelize.define('user', User)

users.beforeCreate(async (user, options) => {
    let hashedPw = await encrypt.encryptPassword(user.password)
    let nnid = await nanoid(10)
    user.secret = nnid
    user.password = hashedPw
})
    
export default sequelize
