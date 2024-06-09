import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Delete,
    Query,
    Put,
    Req,
    UseGuards,
    ParseIntPipe,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { AuthGuard } from 'src/auth/auth.guard';

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

    @Get('top')
    getTopMovies() {
        return this.moviesService.getTopMovies();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.moviesService.findOne(+id);
    }

    @UseGuards(AuthGuard)
    @Post(':id/rate')
    rate(@Param('id', ParseIntPipe) id: number, @Body('rating', ParseIntPipe) rating: number, @Req() req: Request) {
        return this.moviesService.rate(+id, rating, req['user'].id);
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.moviesService.remove(+id);
    }
}
