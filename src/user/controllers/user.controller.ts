/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, HttpCode, Post, UnauthorizedException } from '@nestjs/common';
import { user_loginDTO } from '../models/user-models.dto';
import { UserService } from '../services/user.service';
import { userDTO } from '../models/user.dto';
import { json } from 'sequelize';
require('dotenv').config()

@Controller("user")
export class UserController {
    constructor(private readonly userService: UserService) { }
    @Post("login")
    @HttpCode(200)
    async login(@Body() user: user_loginDTO) {
        const data = await this.userService.login(user)
        return { token: data }
    }

    @Post("register")
    @HttpCode(201)
    async register(@Body() user: userDTO) {
        if (process.env.PROD) {
            throw new UnauthorizedException("Disable router")
        } else {
            const data = await this.userService.regiser(user)
            return { token: data }
        }

    }

}
