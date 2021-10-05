import { Prisma } from '.prisma/client';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { CreateImageDto } from 'src/image/dto/create-image.dto';
import { Product } from '../entities/product.entity';

export class CreateProductDto extends Product {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsInt()
  @IsOptional()
  price?: number | null;

  @ValidateNested({ each: true })
  @Type(() => CreateImageDto)
  @IsArray()
  @IsOptional()
  images?: CreateImageDto[];
}
