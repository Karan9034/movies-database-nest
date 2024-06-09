import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MoviesService {
    constructor(private prisma: PrismaService){}

    async create(createMovieDto: CreateMovieDto) {
        return await this.prisma.movie.create({
            data: createMovieDto
        });
    }

    async findAll(search?: string, genre?: string) {
        if (!search && !genre) return await this.prisma.movie.findMany();
        const result = await this.prisma.movie.findMany({
            where: {
                OR: [
                    {
                        title: {
                            contains: search,
                            mode: 'insensitive',
                        },
                    },
                    {
                        genre: {
                            hasSome: genre ? genre.split(',') : [],
                        },
                    },
                ],
            },
        });
        return result;
    }

    async findOne(id: number) {
        const movie = await this.prisma.movie.findUnique({where: {id}});
        if(!movie) throw new NotFoundException(`Movie with id ${id} not found`);
        return movie;
    }

    async remove(id: number) {
        try{
            return await this.prisma.movie.delete({where: {id}});
        } catch {
            throw new NotFoundException(`Movie with id ${id} not found`);
        }
    }

    async rate(movieId: number, rating: number, userId: number) {
        return await this.prisma.rating.upsert({
            where: {
                userId_movieId: {
                    userId,
                    movieId
                },
            },
            update: {
                value: rating
            },
            create: {
                value: rating,
                userId,
                movieId,
            }
        })
    }

    async getAllRatings() {
        return await this.prisma.rating.findMany();
    }
}
