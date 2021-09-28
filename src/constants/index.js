import errorCodes from "./errorCodes"
import errorMessages from './errorMessages'

const ports = {
    DEV_SERVER_PORT: 5000
}

const limiters = {
    MINIMUM_LENGTH_FOR_NAME: 3,
    MAXIMUM_LENGTH_FOR_NAME: 30,
    MINIMUM_LENGTH_FOR_PASSWORD: 6,
    MINIMUM_LENGTH_FOR_EMAIL: 10,
    MAXIMUM_LENGTH_FOR_EMAIL: 45
}
const successMessages = {
    USER_IS_DELETED: `User is Deleted`,
    USER_IS_UPDATED: `User is Updated`
}

export default {
    ...ports,
    ...limiters,
    ...errorCodes,
    ...errorMessages,
    ...successMessages
}
