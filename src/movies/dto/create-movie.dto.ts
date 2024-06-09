import { IsNotEmpty } from "class-validator";

export class CreateMovieDto {
    @IsNotEmpty()
    title: string;
    
    @IsNotEmpty()
    releaseDate: Date;

    @IsNotEmpty()
    description: string;
    
    genre: string[];
}
