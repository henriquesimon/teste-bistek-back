import { Injectable, NotFoundException } from '@nestjs/common';
import { IProductService } from './product-service.interface';
import { InjectModel } from '@nestjs/sequelize';
import { ProductModel } from './product.model';
import { ProductDTO } from './product.dto';

@Injectable()
export class ProductService implements IProductService {
  constructor(
    @InjectModel(ProductModel)
    private readonly productModel: typeof ProductModel,
  ) {}
  public async update(
    id: string,
    product: Partial<ProductDTO>,
  ): Promise<ProductModel[]> {
    const affectedRows = await this.productModel.update(product, {
      where: { id } as any,
      returning: true,
    })[1];
    return affectedRows as ProductModel[];
  }
  public async getById(id: number): Promise<ProductModel> {
    return this.productModel.findByPk(id);
  }
  public async create(product: Partial<ProductModel>): Promise<ProductModel> {
    const entity = new ProductModel(product);
    entity.isActive = false;
    return await entity.save();
  }
  public async getAll(): Promise<any> {
    return this.productModel.findAll();
  }

  public async deleteById(id: number): Promise<void> {
    const product = await this.productModel.findByPk(id);
    if (!product) {
      throw new NotFoundException(`Produto com ID ${id} não encontrado.`);
    }
    await product.destroy();
  }
}
