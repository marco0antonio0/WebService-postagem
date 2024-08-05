import { PostService } from './services/post.service';
import { PostController } from './controllers/post.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { PostEntity } from './repositories/entities/post.entity';
import { SequelizeModule } from '@nestjs/sequelize';
import { RepositoryPostService } from './repositories/repository_post.service';
import { JwtAuthGuard } from 'src/guard/jwt-auth.guard';
import { AuthModule } from 'src/auth/auth.module';

@Module({
    imports: [SequelizeModule.forFeature([PostEntity]), AuthModule],
    controllers: [
        PostController,],
    providers: [
        PostService, RepositoryPostService],
})
export class PostModule { }
