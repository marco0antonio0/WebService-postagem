import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { RepositoryPostService } from '../repositories/repository_post.service';
import { postDTO } from '../models/post.dto';

@Injectable()
export class PostService {
    constructor(private readonly repository: RepositoryPostService) { }

    async getOnePost(id: number) {
        const data = await this.repository.findOne(id);
        if (!data) {
            throw new NotFoundException("Post não encontrado");
        }
        return data;
    }
    async getOnePostByTitulo(titulo: string) {
        const data = await this.repository.findOneByTitulo(titulo);
        if (!data) {
            throw new NotFoundException("Post não encontrado");
        }
        return data;
    }

    async getAllPost() {
        const data = await this.repository.findAll();
        if (!data.length) {
            throw new NotFoundException("Nenhum post encontrado");
        }
        return data;
    }

    async getAllPostByTitulo(titulo: string) {
        const data = await this.repository.findAllByTitulo(titulo);
        if (!data) {
            throw new NotFoundException("Post não encontrado");
        }
        return data;
    }

    async createPost(post: postDTO) {
        const titulo = await this.repository.findOneByTitulo(post.titulo)
        if (titulo) {
            throw new ConflictException("Ja existe postagem com o mesmo esse titulo")
        }
        return await this.repository.create(post);
    }

    async updatePost(id: number, post: postDTO) {
        const [affectedCount, updatedPosts] = await this.repository.update(id, post);
        if (affectedCount === 0) {
            throw new NotFoundException("Post não encontrado para atualizar");
        }
        return updatedPosts[0];
    }

    async deletePost(id: number) {
        const post = await this.getOnePost(id);
        await this.repository.delete(post.id);
    }
}
