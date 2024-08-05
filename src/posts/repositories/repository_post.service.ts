import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { postDTO } from '../models/post.dto';
import { PostEntity } from './entities/post.entity';

@Injectable()
export class RepositoryPostService {
    constructor(
        @InjectModel(PostEntity)
        private readonly postRepository: typeof PostEntity,
    ) { }

    async create(post: postDTO): Promise<PostEntity> {
        return await this.postRepository.create(post);
    }

    async findAll(): Promise<PostEntity[]> {
        return await this.postRepository.findAll();
    }

    async findOne(id: number): Promise<PostEntity> {
        return await this.postRepository.findOne({ where: { id } });
    }

    async findOneByTitulo(titulo: string): Promise<PostEntity> {
        return await this.postRepository.findOne({ where: { titulo } });
    }

    async findAllByTitulo(titulo: string): Promise<PostEntity[]> {
        return await this.postRepository.findAll({ where: { titulo } });
    }

    async update(id: number, post: postDTO): Promise<[number, PostEntity[]]> {
        const [affectedCount, affectedRows] = await this.postRepository.update(post, {
            where: { id },
            returning: true, // Essa opção garante que os registros atualizados sejam retornados
        });
        return [affectedCount, affectedRows];
    }

    async delete(id: number): Promise<void> {
        const post = await this.findOne(id);
        await post.destroy();
    }
}
