import { IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class postDTO {

    @IsString()
    @IsNotEmpty({ message: "Campo titulo não pode ser vazio" })
    titulo: string

    @IsBoolean()
    @IsOptional()
    destaque?: boolean

    @IsNotEmpty({ message: "Campo conteudo não pode ser vazio" })
    @IsString()
    conteudo: string

    @IsNotEmpty({ message: "Campo link_image não pode ser vazio" })
    @IsString()
    link_image: string
}