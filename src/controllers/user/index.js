import {
    getUserService,
    postUserService,
    deleteUserService,
    putUserService
} from '../../services'

import constants from '../../constants'
import { throwError, OK } from '../../util/helper'

const {
    CREATED,
    SUCCESS,
    ALREADY_EXISTS,
    EMAIL_ALREADY_EXISTS,
    USER_IS_DELETED,
    USER_IS_NOT_EXISTS
} = constants

const getUsers = async (req, res) => {
    try {
        OK(SUCCESS, res, (await getUserService.all()))
    } catch (e) {
        throwError(res, e)
    }
}

const getUserById = async (req, res) => {
    try {
        OK(SUCCESS, res, (await getUserService.byId(req.params.id)))
    } catch (e) {
        throwError(res, e)
    }
}

const createUser = async (req, res) => {
    try {
        const {
            givenName,
            familyName,
            email,
            password
        } = req.body
        const userExists = await getUserService.byEmail(email)
        if(!userExists) {
        const newUser = await postUserService.create({
            givenName,
            familyName,
            email,
            password
        })
        OK(CREATED, res, newUser)
    }else{
        OK(ALREADY_EXISTS, res, {message: EMAIL_ALREADY_EXISTS})
    }
    } catch (e) {
        throwError(res, e)
    }
}

const deleteUser = async (req, res) => {
    try {
        const userDeleted = await deleteUserService.byId(req.params.id)
        OK(SUCCESS, res, { message: userDeleted ? USER_IS_DELETED : USER_IS_NOT_EXISTS })
    } catch (e) {
        throwError(res, e)
    }
}

const updateUserById = async (req, res) => {
    try {
        const {
            givenName,
            familyName,
            email,
            password
        } = req.body
        const updateUserById = await putUserService.byId(req.params.id, {
            givenName,
            familyName,
            email,
            password
        })
        OK(SUCCESS, res, updateUserById)
    } catch (e) {
        throwError(res, e)
    }
}

export default {
    createUser,
    getUsers,
    getUserById,
    deleteUser,
    updateUserById
}
