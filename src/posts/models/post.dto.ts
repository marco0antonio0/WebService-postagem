import { IsNotEmpty, IsString } from "class-validator";

export class postDTO {

    @IsString()
    @IsNotEmpty({ message: "Campo titulo não pode ser vazio" })
    titulo: string

    @IsNotEmpty({ message: "Campo subtitulo não pode ser vazio" })
    @IsString()
    subtitulo: string

    @IsNotEmpty({ message: "Campo conteudo não pode ser vazio" })
    @IsString()
    conteudo: string
}