import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private readonly _include;
    create(dto: CreateProductDto): Prisma.Prisma__ProductClient<import(".prisma/client").Product & {
        images: {
            url: string;
            id: number;
        }[];
    }>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Product & {
        images: {
            url: string;
        }[];
    })[]>;
    findOne(id: number): Prisma.Prisma__ProductClient<import(".prisma/client").Product & {
        images: {
            url: string;
            id: number;
        }[];
    }>;
    update(id: number, data: UpdateProductDto): Prisma.Prisma__ProductClient<import(".prisma/client").Product>;
    remove(id: number): Prisma.Prisma__ProductClient<import(".prisma/client").Product>;
}
