import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}
  private readonly _include = {
    images: {
      select: {
        id: false,
        url: true,
      },
    },
  };

  create(dto: CreateProductDto) {
    const data: Prisma.ProductCreateInput = {
      ...dto,
      images: {
        create: dto.images,
      },
    };

    return this.prisma.product.create({
      data,
      include: this._include,
    });
  }

  findAll() {
    return this.prisma.product.findMany({
      include: { images: { select: { url: true } } },
    });
  }

  findOne(id: number) {
    return this.prisma.product.findUnique({
      where: { id },
      include: this._include,
    });
  }

  update(id: number, data: UpdateProductDto) {
    return this.prisma.product.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.product.delete({ where: { id } });
  }
}
