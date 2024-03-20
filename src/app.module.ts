import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductModule } from './app/product/product.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'dpg-cnt92o779t8c73acabr0-a',
      port: 5432,
      username: 'root',
      password: 'BawV74UID9U1nBvWXntNTDogj2lE9Wie',
      database: 'dev_uva9',
      logging: true,
      logQueryParameters: true,
      autoLoadModels: true,
      synchronize: true,
    }),
    ProductModule,
  ],
})
export class AppModule {}
