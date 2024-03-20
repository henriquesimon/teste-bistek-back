import { ProductDTO } from './product.dto';
import { ProductModel } from './product.model';

export interface IProductService {
  deleteById(id: number): unknown;
  getAll(): Promise<ProductModel[]>;
  getById(id: number): Promise<ProductModel>;
  create(product: Partial<ProductDTO>): Promise<ProductModel>;
  update(id: string, product: Partial<ProductDTO>): Promise<ProductModel[]>;
}

export const IProductService = Symbol('IProductService');
