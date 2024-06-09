import { IsDate, IsNotEmpty } from "class-validator";

export class CreateMovieDto {
    @IsNotEmpty()
    title: string;
    
    @IsDate()
    releaseDate: Date;

    @IsNotEmpty()
    description: string;
    
    genre: string[];
}
