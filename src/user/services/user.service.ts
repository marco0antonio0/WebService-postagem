/*
https://docs.nestjs.com/providers#services
*/

import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { Repository_userService } from '../repositories/repository_user.service';
import { user_loginDTO } from '../models/user-models.dto';
import { userDTO } from '../models/user.dto';
import * as bcrypt from "bcrypt"
import { AuthService } from 'src/auth/services/auth.service';

@Injectable()
export class UserService {
    constructor(private readonly repositoryUser: Repository_userService, private readonly auth: AuthService) { }
    async login(user: user_loginDTO) {
        const data = await this.repositoryUser.findUserByEmail({ email: user.email })
        if (!data) {
            throw new NotFoundException("Email não registrado")
        }
        const validationPassoword = await bcrypt.compare(user.password, data.password)
        if (!validationPassoword) {
            throw new UnauthorizedException("Email e/ou senha incorretos")
        }
        const token = await this.auth.createToken(user)
        return token

    }
    async regiser(user: userDTO) {
        const isEmailFound = await this.repositoryUser.findUserByEmail({ email: user.email })

        if (isEmailFound) {
            throw new ConflictException("Email ja registrado")
        }

        user.password = await bcrypt.hash(user.password, 10)
        await this.repositoryUser.createUser(user)

        const token = await this.auth.createToken(user)
        return token
    }


}
