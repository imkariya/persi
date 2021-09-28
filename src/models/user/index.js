import { Sequelize } from "sequelize";

const User = {
    givenName: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    familyName: {
        type: Sequelize.STRING(45),
        allowNull: false,
        max: 45
    },
    email: {
        type: Sequelize.STRING(45),
        allowNull: false,
        unique: true,
        isEmail: true,
        max: 45
    },
    password: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: true,
        max: 255,
        is: /^[0-9a-f]{64}$/i
    },
    secret: {
        type: Sequelize.STRING(10),
        unique: true,
        max: 10
    }
}

export default User
