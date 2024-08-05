import { Controller, Get, Post, Body, Param, Put, Delete, UseGuards } from '@nestjs/common';
import { PostService } from '../services/post.service';
import { postDTO } from '../models/post.dto';
import { JwtAuthGuard } from 'src/guard/jwt-auth.guard';

@Controller('posts')
export class PostController {
    constructor(private readonly postService: PostService) { }

    @Post()
    @UseGuards(JwtAuthGuard)
    async create(@Body() post: postDTO) {
        return await this.postService.createPost(post);
    }

    @Get()
    async findAll() {
        return await this.postService.getAllPost();
    }

    @Get('titulo/:titulo')
    async findOneByTitulo(@Param('titulo') titulo: string) {
        return await this.postService.getOnePostByTitulo(titulo);
    }

    @Get('titulo/:titulo')
    async findAllByTitulo(@Param('titulo') titulo: string) {
        return await this.postService.getOnePostByTitulo(titulo);
    }

    @Get('id/:id')
    async findOne(@Param('id') id: number) {
        return await this.postService.getOnePost(id);
    }

    @Put('id/:id')
    @UseGuards(JwtAuthGuard)
    async update(@Param('id') id: number, @Body() post: postDTO) {
        return await this.postService.updatePost(id, post);
    }

    @Delete('id/:id')
    @UseGuards(JwtAuthGuard)
    async delete(@Param('id') id: number) {
        await this.postService.deletePost(id);
    }
}
