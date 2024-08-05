import { Column, Model, Table } from 'sequelize-typescript';

@Table({ tableName: "posts" })
export class PostEntity extends Model<PostEntity> {
    @Column({})
    titulo: string;

    @Column({})
    subtitulo: string;

    @Column({})
    conteudo: string;
}
