import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateProductDto) {
    return this.prisma.product.create({ data, include: { images: true } });
  }

  findAll() {
    return this.prisma.product.findMany({
      include: { images: { select: { url: true } } },
    });
  }

  findOne(id: number) {
    return this.prisma.product.findUnique({
      where: { id },
      include: { images: true },
    });
  }

  update(id: number, data: UpdateProductDto) {
    return this.prisma.product.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
   
    const imgId = this.prisma.image.ImageSelect.id;
    return this.prisma.product.delete({
      where: { id },
      include: { images: { select: { imgId } } },
    });
  }
}
