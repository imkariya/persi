import sequelize from '../../models'

const byId = async (id) => sequelize.models.user.destroy({
    where:{
        id
    }
})

export default {
    byId
}
