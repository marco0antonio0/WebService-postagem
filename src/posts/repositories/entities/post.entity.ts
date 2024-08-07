import { Column, Model, Table } from 'sequelize-typescript';
import { toDefaultValue } from 'sequelize/types/utils';

@Table({ tableName: "posts" })
export class PostEntity extends Model<PostEntity> {
    @Column({})
    titulo: string;

    @Column({
        defaultValue: false
    })
    destaque: boolean;

    @Column({})
    conteudo: string;

    @Column({ defaultValue: "" })
    link_image: string;
}
