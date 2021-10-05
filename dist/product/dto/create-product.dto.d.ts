import { CreateImageDto } from 'src/image/dto/create-image.dto';
import { Product } from '../entities/product.entity';
export declare class CreateProductDto extends Product {
    name: string;
    price?: number | null;
    images?: CreateImageDto[];
}
