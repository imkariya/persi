import sequelize from '../../models'

const all = async () => sequelize.models.user.findAll()

const byId = async (id) => sequelize.models.user.findOne({
    where:{
        id
    }
})

const byEmail = async (email) => sequelize.models.user.findOne({
    where:{
        email
    }
})

export default {
    all,
    byId,
    byEmail
}
