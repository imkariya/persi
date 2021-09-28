import bcrypt from 'bcryptjs'

const encryptPassword = password => {
    const salt = bcrypt.genSaltSync()
    return bcrypt.hashSync(password, salt)
}

const comparePassword = (password, encodedPassword) => {
    return bcrypt.compareSync(password, encodedPassword)
}

export default {
    encryptPassword,
    comparePassword
}
