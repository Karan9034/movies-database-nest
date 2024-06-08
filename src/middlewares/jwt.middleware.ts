import {
    ForbiddenException,
    Injectable,
    InternalServerErrorException,
    NestMiddleware,
    UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request, Response, NextFunction } from 'express';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class JwtMiddleware implements NestMiddleware {
    constructor(
        private jwtService: JwtService,
        private prismaService: PrismaService,
    ) {}
    async use(req: Request, res: Response, next: NextFunction) {
        const token = req.headers['authorization'];
        if (token) {
            try {
                const payload = this.jwtService.verify(
                    token.toString().split(' ')[1],
                    { secret: process.env.SECRET_KEY },
                );
                const user = await this.prismaService.user.findUnique({
                    where: { id: payload.id },
                });
                res.locals.user = {
                    id: user.id,
                    email: user.email,
                    name: user.name,
                };
                next();
            } catch (error) {
                console.log(error, 'Token invalid');
                next();
            }
        } else {
            throw new UnauthorizedException('Token not found');
        }
    }
}
