import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Delete,
    Query,
    Put,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Controller('movies')
export class MoviesController {
    constructor(private readonly moviesService: MoviesService) {}

    @Post()
    create(@Body() createMovieDto: CreateMovieDto) {
        return this.moviesService.create(createMovieDto);
    }

    @Get()
    findAll(@Query('search') search: string, @Query('genre') genre: string) {
        return this.moviesService.findAll(search, genre);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.moviesService.findOne(+id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateMovieDto: UpdateMovieDto) {
        return this.moviesService.update(+id, updateMovieDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.moviesService.remove(+id);
    }
}