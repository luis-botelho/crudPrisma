import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreateProductDto): import(".prisma/client").Prisma.Prisma__ProductClient<import(".prisma/client").Product & {
        images: import(".prisma/client").Image[];
    }>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Product & {
        images: {
            url: string;
        }[];
    })[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__ProductClient<import(".prisma/client").Product & {
        images: import(".prisma/client").Image[];
    }>;
    update(id: number, data: UpdateProductDto): import(".prisma/client").Prisma.Prisma__ProductClient<import(".prisma/client").Product>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__ProductClient<import(".prisma/client").Product>;
}
