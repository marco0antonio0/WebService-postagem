import { AuthService } from './services/auth.service';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
require('dotenv').config()

@Module({
    imports: [JwtModule.register({ secret: process.env.SECRET_KEY })],
    controllers: [],
    providers: [AuthService,],
    exports: [AuthService, JwtModule]
})
export class AuthModule { }
