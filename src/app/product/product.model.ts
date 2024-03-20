import {
  Column,
  CreatedAt,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';

@Table({ tableName: 'product' })
export class ProductModel extends Model<ProductModel> {
  @Column({ primaryKey: true, type: DataType.INTEGER, autoIncrement: true })
  id: number;
  @Column({ type: DataType.STRING(50), allowNull: false }) description: string;
  @Column({
    type: DataType.ENUM(
      'Bebidas',
      'Mercearia',
      'Padaria',
      'Bazar',
      'Frios',
      '',
    ),
  })
  category: string;
  @Column({ type: DataType.BOOLEAN }) isActive: boolean;
  @CreatedAt createdAt: Date;
}
