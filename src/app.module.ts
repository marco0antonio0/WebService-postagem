import { PostModule } from './posts/post.module';
import { AuthModule } from './auth/auth.module';
import { Repository_userService } from './user/repositories/repository_user.service';
import { UserModule } from './user/user.module';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { sequelizeConfig } from './config/databasse.config';
require('dotenv').config()

@Module({
  imports: [
    PostModule,
    SequelizeModule.forRoot(sequelizeConfig),
    AuthModule,
    UserModule,],
  controllers: [
  ],
  providers: [
  ],
})
export class AppModule { }