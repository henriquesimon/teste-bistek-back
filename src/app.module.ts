import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductModule } from './app/product/product.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'admin@123',
      database: 'teste_db',
      logging: true,
      logQueryParameters: true,
      autoLoadModels: true,
      synchronize: true,
    }),
    ProductModule,
  ],
})
export class AppModule {}
