import { Prisma } from '.prisma/client';
import { Product } from '../entities/product.entity';
export declare class CreateProductDto extends Product {
    name: string;
    price?: number | null;
    images?: Prisma.ImageUncheckedCreateNestedManyWithoutProductInput;
}
