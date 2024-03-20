import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  Put,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { IProductService } from './product-service.interface';
import { ProductModel } from './product.model';
import { JoiPipe } from 'nestjs-joi';
import { ProductDTO } from './product.dto';

@Controller('product')
export class ProductController {
  constructor(
    @Inject(IProductService) private readonly productService: IProductService,
  ) {}
  @Get()
  public async getAll(): Promise<ProductModel[]> {
    return this.productService.getAll();
  }
  @Get(':id')
  public async getById(@Param() params: any): Promise<ProductModel> {
    return this.productService.getById(params.id);
  }
  @Post()
  public async create(@Body(JoiPipe) body: ProductDTO): Promise<ProductModel> {
    return this.productService.create(body);
  }
  @Put(':id')
  public async update(
    @Param() params: any,
    @Body(JoiPipe) body: ProductDTO,
  ): Promise<ProductModel[]> {
    return this.productService.update(params.id, body);
  }

  @Delete(':id')
  public async deleteProduct(@Param('id') id: number) {
    try {
      const product = await this.productService.getById(id);
      if (product && product.category) {
        console.log('Erro ao excluir, categoria vinculada.');
        return { message: 'Erro ao excluir, categoria vinculada.' };
      } else {
        await this.productService.deleteById(id);
        return { message: 'Produto excluído com sucesso.' };
      }
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException('Produto não encontrado.');
      }
      throw error;
    }
  }
}
