import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductModel } from './product.model';
import { IProductService } from './product-service.interface';

@Module({
  imports: [SequelizeModule.forFeature([ProductModel])],
  controllers: [ProductController],
  providers: [{ provide: IProductService, useClass: ProductService }],
})
export class ProductModule {}
