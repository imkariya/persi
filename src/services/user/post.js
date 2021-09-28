import sequelize from '../../models'

const create = async (user) => sequelize.models.user.create(user)

export default {
    create
}
