import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import movies from './mock_data';

@Injectable()
export class MoviesService {
    private movies = movies;

    create(createMovieDto: CreateMovieDto) {
        const newMovie = {
            id: Date.now(),
            ...createMovieDto,
            rating: 0,
        };
        this.movies.push(newMovie);

        return newMovie;
    }

    findAll(search?: string, genre?: string) {
        if (!search && !genre) return this.movies;
        const result = this.movies.filter(
            (movie: any) =>
                movie.title.toLowerCase().includes(search?.toLowerCase()) ||
                movie.genre.toLowerCase().includes(genre?.toLowerCase()),
        );
        return result;
    }

    findOne(id: number) {
        const movie = this.movies.find((movie: any) => movie.id === id);

        if (!movie) {
            throw new NotFoundException(`Movie with id ${id} not found`);
        }
        return movie;
    }

    update(id: number, updateMovieDto: UpdateMovieDto) {
        this.movies = this.movies.map((movie: any) => {
            if (movie.id === id) {
                return {
                    ...movie,
                    ...updateMovieDto,
                };
            }
            return movie;
        });

        return this.findOne(id);
    }

    remove(id: number) {
        const movie = this.findOne(id);
        this.movies = this.movies.filter((movie: any) => movie.id !== id);
        return movie;
    }
}
