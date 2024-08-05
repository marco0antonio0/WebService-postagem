import { UserService } from './services/user.service';
import { UserController } from './controllers/user.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { UserEntity } from './repositories/entity/user.entity';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from 'src/auth/auth.module';
import { AuthService } from 'src/auth/services/auth.service';
import { Repository_userService } from './repositories/repository_user.service';

@Module({
    imports: [SequelizeModule.forFeature([UserEntity]), AuthModule],
    controllers: [
        UserController,],
    providers: [
        UserService, AuthService, Repository_userService],
})
export class UserModule { }
