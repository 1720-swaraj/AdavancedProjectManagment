import express from 'express'
import { getUsers } from '../Controllers/userController.js'

export const usersRouter = express.Router()

usersRouter.route("").get(getUsers)