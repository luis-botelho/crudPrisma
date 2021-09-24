import { Prisma } from '@prisma/client';
export declare class Product implements Prisma.ProductUncheckedCreateInput {
    id?: number;
    name: string;
    price?: number;
    images?: Prisma.ImageUncheckedCreateNestedManyWithoutProductInput;
}
