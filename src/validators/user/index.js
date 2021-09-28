import Joi from 'joi'
import constants from '../../constants'

const {
    MAXIMUM_LENGTH_FOR_EMAIL,
    MAXIMUM_LENGTH_FOR_NAME,
    MINIMUM_LENGTH_FOR_NAME,
    MINIMUM_LENGTH_FOR_PASSWORD,
    MINIMUM_LENGTH_FOR_EMAIL
} = constants

import { throwError } from '../../util/helper'

const createUser = async (req, res, next) => {
    const schema = Joi.object({
        givenName: Joi.string()
            .min(MINIMUM_LENGTH_FOR_NAME)
            .max(MAXIMUM_LENGTH_FOR_NAME)
            .required(),
        familyName: Joi.string()
            .min(MINIMUM_LENGTH_FOR_NAME)
            .max(MAXIMUM_LENGTH_FOR_NAME)
            .required(),

        email: Joi.string()
        .min(MINIMUM_LENGTH_FOR_EMAIL)
            .max(MAXIMUM_LENGTH_FOR_EMAIL)
            .email(),
        password: Joi.string().min(6)

    })

    const validate = schema.validate(req.body)

    if (validate && validate.error) {
        throwError(res, {
            error: validate.error
        })
    } else if (validate && validate.value) {
        await next()
    }
}

const deleteUser = async (req, res, next) => validateId(req, res, next)

const getUser = async (req, res, next) => validateId(req, res, next)


const updateUserById = async (req, res, next) => {
    const schema = Joi.object({
        givenName: Joi.string()
            .min(MINIMUM_LENGTH_FOR_NAME)
            .max(MAXIMUM_LENGTH_FOR_NAME)
            .required(),
        familyName: Joi.string()
            .min(MINIMUM_LENGTH_FOR_NAME)
            .max(MAXIMUM_LENGTH_FOR_NAME)
            .required(),
        email: Joi.string()
        .min(MINIMUM_LENGTH_FOR_EMAIL)
        .max(MAXIMUM_LENGTH_FOR_EMAIL)
            .email(),
        password: Joi.string().min(MINIMUM_LENGTH_FOR_PASSWORD)
            .max(MAXIMUM_LENGTH_FOR_EMAIL)

    })

    const validate = schema.validate(req.body)

    if (validate && validate.error) {
        throwError(res, {
            error: validate.error
        })
    } else if (validate && validate.value) {
        await validateId(req, res, next)
    }
}

const validateId = async (req , res, next) => {
    const validateParams = Joi.number().required().validate(req.params.id)

    if (validateParams && validateParams.error) {
        throwError(res, {
            error: validateParams.error
        })
    } 
    
    else if (validateParams && validateParams.value) {
        await next()
    }
}

export default {
    createUser,
    deleteUser,
    updateUserById,
    getUser
}
