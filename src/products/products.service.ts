import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ProductsService {

  constructor(private prisma: DatabaseService) { }
  create(createProductDto: Prisma.ProductCreateInput) {
    return this.prisma.product.create({
      data: createProductDto
    })
  }

  findAll() {
    return this.prisma.product.findMany({
      include: {
        reviews: true,
        description: true,
        tags: true
      }
    })
  }

  findOne(id: number) {
    return this.prisma.product.findUnique({
      where: {
        id
      }
    })
  }

  update(id: number, updateProductDto: Prisma.ProductUpdateInput) {
    return this.prisma.product.update({
      where: {
        id
      },
      data: updateProductDto
    })
  }

  remove(id: number) {
    return this.prisma.product.delete({
      where: {
        id
      }
    })
  }
}
